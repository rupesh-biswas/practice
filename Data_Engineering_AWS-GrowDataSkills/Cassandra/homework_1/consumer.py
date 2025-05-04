# Make sure to install confluent-kafka python package
# pip install confluent-kafka

import uuid
from confluent_kafka import DeserializingConsumer
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroDeserializer
from confluent_kafka.serialization import StringDeserializer
from dotenv import load_dotenv
import os
from cassandra import ConsistencyLevel
from cassandra.query import SimpleStatement
from cassandra_connect import connect_to_cassandra


# Load environment variables from .env file
load_dotenv()

# Define Kafka configuration
kafka_config = {
    'bootstrap.servers': f'{os.getenv("KAFKA_BOOTSTRAP_SERVERS")}',
    'sasl.mechanisms': f'{os.getenv("KAFKA_SASL_MECHANISMS")}',
    'security.protocol': f'{os.getenv("KAFKA_SECURITY_PROTOCOL")}',
    'sasl.username': f'{os.getenv("SASL_KAFKA_USERNAME")}',
    'sasl.password': f'{os.getenv("SASL_KAFKA_PASSWORD")}',
    'group.id': 'ecommerce-consumer-group',
    'auto.offset.reset': 'latest'
}

# Create a Schema Registry client
schema_registry_client = SchemaRegistryClient({
  'url': f'{os.getenv("SCHEMA_REGISTRY_URL")}',
  'basic.auth.user.info': f'{os.getenv("SCHEMA_REGISTRY_API_KEY")}:{os.getenv("SCHEMA_REGISTRY_API_SECRET")}'
})

# Fetch the latest Avro schema for the value
subject_name = f'{os.getenv("KAFKA_TOPIC")}-value'
schema_str = schema_registry_client.get_latest_version(subject_name).schema.schema_str

# Create Avro Deserializer for the value
key_deserializer = StringDeserializer('utf_8')
avro_deserializer = AvroDeserializer(schema_registry_client, schema_str)

# Define the DeserializingConsumer
consumer = DeserializingConsumer({
    'bootstrap.servers': kafka_config['bootstrap.servers'],
    'security.protocol': kafka_config['security.protocol'],
    'sasl.mechanisms': kafka_config['sasl.mechanisms'],
    'sasl.username': kafka_config['sasl.username'],
    'sasl.password': kafka_config['sasl.password'],
    'key.deserializer': key_deserializer,
    'value.deserializer': avro_deserializer,
    'group.id': kafka_config['group.id'],
    'auto.offset.reset': kafka_config['auto.offset.reset']
    # 'enable.auto.commit': True,
    # 'auto.commit.interval.ms': 5000 # Commit every 5000 ms, i.e., every 5 seconds
})

# Subscribe to the 'retail_data' topic
consumer.subscribe([f'{os.getenv("KAFKA_TOPIC")}'])

# Connect to Cassandra
cassandra_session = connect_to_cassandra()
if cassandra_session is None:
    print("❌ Failed to connect to Cassandra")
else:
    # select the keyspace
    cassandra_session.set_keyspace(os.getenv("CASSANDRA_KEYSPACE"))
    print("✅ Connected to Cassandra and keyspace: ", os.getenv("CASSANDRA_KEYSPACE"))

# Check if data already exists in Cassandra
def check_data_exists(order_id):
    try:
        order_id = uuid.UUID(order_id)  # Convert order_id to UUID
        query = SimpleStatement(
            "SELECT order_id FROM orders WHERE order_id = %s ALLOW FILTERING",
            consistency_level=ConsistencyLevel.ONE
        )
        result = cassandra_session.execute(query, (order_id,))
        return result.one() is not None
    except Exception as e:
        print(f"❌ Error checking data existence in Cassandra: {e}")
        return False

# insert to cassandra
def insert_to_cassandra(data):
    try:
        # Check if the data already exists in Cassandra
        if check_data_exists(data['order_id']):
            print(f"❌ Data with order_id {data['order_id']} already exists in Cassandra")
            return
        
        # Prepare the insert query
        query = """
        INSERT INTO orders (
            order_id, 
            customer_id,
            order_status,
            order_purchase_timestamp,
            order_approved_at,
            order_delivered_carrier_date,
            order_delivered_customer_date,
            order_estimated_delivery_date,
            OrderHour,
            OrderDayOfWeek
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        
        # Convert order_id and customer_id uuid string to UUID objects
        data['order_id'] = uuid.UUID(data['order_id'])
        data['customer_id'] = uuid.UUID(data['customer_id'])
        
        # Calculate OrderHour and OrderDayOfWeek from order_purchase_timestamp
        ts = data['order_purchase_timestamp']
        data['OrderHour'] = ts.hour
        data['OrderDayOfWeek'] = ts.strftime('%A')

        # Insert with Quorum consistency level
        query = SimpleStatement(query, consistency_level=ConsistencyLevel.QUORUM)

        # Execute the query with the data
        cassandra_session.execute(query, (
            data['order_id'],
            data['customer_id'],
            data['order_status'],
            data['order_purchase_timestamp'],
            data['order_approved_at'],
            data['order_delivered_carrier_date'],
            data['order_delivered_customer_date'],
            data['order_estimated_delivery_date'],
            data['OrderHour'],
            data['OrderDayOfWeek']
        ))
        print("✅ Data inserted into Cassandra with Quorum consistency level")
    except Exception as e:
        print(f"❌ Error inserting data into Cassandra: {e}")
    

# Poll for messages and print them
def consume_messages(consumer, timeout=1.0):
    try:
        while True:
            msg = consumer.poll(timeout=timeout)
            if msg is None:
                continue
            if msg.error():
                print(f"Error: {msg.error()}")
                continue

            # Deserialize the key and value
            key = msg.key()
            value = msg.value()

            # Print the key and value
            print("✅ Message received:")
            print(f"Key: {key}, Value: {value}")

            # Insert the message into Cassandra
            if cassandra_session is not None:
                insert_to_cassandra(value)

    except KeyboardInterrupt:
        pass
    except Exception as e:
        print(f"❌ Error consuming messages: {e}")
    finally:
        consumer.close()

consume_messages(consumer)
