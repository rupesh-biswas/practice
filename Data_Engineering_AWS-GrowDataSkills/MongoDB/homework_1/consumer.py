# Make sure to install confluent-kafka python package
# pip install confluent-kafka

from confluent_kafka import DeserializingConsumer
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroDeserializer
from confluent_kafka.serialization import StringDeserializer
from dotenv import load_dotenv
import os
from pymongo import MongoClient


# Load environment variables from .env file
load_dotenv()

# Define Kafka configuration
kafka_config = {
    'bootstrap.servers': f'{os.getenv("KAFKA_BOOTSTRAP_SERVERS")}',
    'sasl.mechanisms': f'{os.getenv("KAFKA_SASL_MECHANISMS")}',
    'security.protocol': f'{os.getenv("KAFKA_SECURITY_PROTOCOL")}',
    'sasl.username': f'{os.getenv("SASL_KAFKA_USERNAME")}',
    'sasl.password': f'{os.getenv("SASL_KAFKA_PASSWORD")}',
    'group.id': 'logistics-consumer-group',
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

# validation checks on the value
def validate_value(value):
    # Check if the value is a dictionary and contains the expected keys
    if not isinstance(value, dict):
        print("❌ Invalid value format: Expected a dictionary")
        return False

    required_keys = ['gpsprovider', 'bookingid', 'bookingid_date', 'vehicle_no', 'trip_start_date']
    for key in required_keys:
        if key not in value:
            print(f"❌ Missing required key: {key}")
            return False

    # Additional validation checks can be added here

    return True

# function to push the validated value to MongoDB
def push_to_mongodb(value):
    conn_string = os.getenv("MONGO_DB_CONNECTION_STRING")

    # Connect to MongoDB
    client = MongoClient(conn_string)

    # Select the database
    db = client['logistics']

    # Select the collection
    collection = db['trip_data']

    # Insert a document
    insert_result = collection.insert_one(value)
    print(f"✅ Document inserted with id: {insert_result.inserted_id}")

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

            # Do validation checks on the value
            # validation checks pass push to MongoDB
            if validate_value(value):
                # Here you can add the code to push the validated value to MongoDB
                print("✅ Value is valid and can be pushed to MongoDB")
                push_to_mongodb(value)
            else:
                print("❌ Value failed validation checks")
    except KeyboardInterrupt:
        pass
    finally:
        consumer.close()

consume_messages(consumer)
