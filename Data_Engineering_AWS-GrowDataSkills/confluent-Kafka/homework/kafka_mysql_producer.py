import time
import psycopg2
from confluent_kafka import SerializingProducer
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroSerializer
from confluent_kafka.serialization import StringSerializer
import os
from dotenv import load_dotenv

# Check if running locally
if os.getenv('ENVIRONMENT') != 'docker':
    print("Running locally")
    # Specify the path to the .env file
    env_path = os.path.join(os.getcwd(), '.env.local')
    # Load environment variables from the specified .env file
    load_dotenv(dotenv_path=env_path, override=True)

else:
    print("Running in Docker")
    # Load environment variables from the default .env file
    env_path = os.path.join(os.getcwd(), '.env')
    load_dotenv(dotenv_path=env_path, override=True)

def delivery_report(err, msg):
    """
    Reports the failure or success of a message delivery.

    Args:
        err (KafkaError): The error that occurred on None on success.

        msg (Message): The message that was produced or failed.

    Note:
        In the delivery report callback the Message.key() and Message.value()
        will be the binary format as encoded by any configured Serializers and
        not the same object that was passed to produce().
        If you wish to pass the original object(s) for key and value to delivery
        report callback we recommend a bound callback or lambda where you pass
        the objects along.

    """
    if err is not None:
        print(f"Delivery failed for User record {msg.key()}: {err}")
        return
    print(f'User record {msg.key()} successfully produced to {msg.topic()} [{msg.partition()}] at offset {msg.offset()}')
    print("=====================")


# Define Kafka configuration
kafka_config = {
    'bootstrap.servers': f'{os.getenv("KAFKA_BOOTSTRAP_SERVERS")}',
    'sasl.mechanisms': f'{os.getenv("KAFKA_SASL_MECHANISMS")}',
    'security.protocol': f'{os.getenv("KAFKA_SECURITY_PROTOCOL")}',
    'sasl.username': f'{os.getenv("SASL_KAFKA_USERNAME")}',
    'sasl.password': f'{os.getenv("SASL_KAFKA_PASSWORD")}'
}

# Create a Schema Registry client
schema_registry_client = SchemaRegistryClient({
  'url': f'{os.getenv("SCHEMA_REGISTRY_URL")}',
  'basic.auth.user.info': f'{os.getenv("SCHEMA_REGISTRY_API_KEY")}:{os.getenv("SCHEMA_REGISTRY_API_SECRET")}'
})


POSTGRES_CONFIG = {
    'dbname': os.getenv('POSTGRES_DB', 'mydatabase'),
    'user': os.getenv('POSTGRES_USER', 'user'),
    'password': os.getenv('POSTGRES_PASSWORD', 'password'),
    'host': os.getenv('POSTGRES_HOST', 'localhost'),
    'port': int(os.getenv('POSTGRES_PORT', 5432))
}

# Fetch the latest Avro schema for the value
print(os.getenv("KAFKA_TOPIC"))
subject_name = f'{os.getenv("KAFKA_TOPIC")}-value'
schema_str = schema_registry_client.get_latest_version(subject_name).schema.schema_str
print("Schema from Registery---")
print(schema_str)
print("=====================")

# Create Avro Serializer for the value
key_serializer = StringSerializer('utf_8')
avro_serializer = AvroSerializer(schema_registry_client, schema_str)

# Define the SerializingProducer
producer = SerializingProducer({
    'bootstrap.servers': kafka_config['bootstrap.servers'],
    'security.protocol': kafka_config['security.protocol'],
    'sasl.mechanisms': kafka_config['sasl.mechanisms'],
    'sasl.username': kafka_config['sasl.username'],
    'sasl.password': kafka_config['sasl.password'],
    'key.serializer': key_serializer,  # Key will be serialized as a string
    'value.serializer': avro_serializer  # Value will be serialized as Avro
})

import psycopg2

# Function to fetch data from PostgreSQL
def fetch_data(last_read_timestamp):
    connection = psycopg2.connect(**POSTGRES_CONFIG)  # Use PostgreSQL-compatible config
    cursor = connection.cursor()

    query = """
    SELECT id, name, category, price, last_updated
    FROM product
    WHERE last_updated > %s
    ORDER BY last_updated ASC
    """

    cursor.execute(query, (last_read_timestamp,))
    rows = cursor.fetchall()

    # Convert rows to a list of dictionaries
    columns = [desc[0] for desc in cursor.description]
    result = []
    for row in rows:
        row_dict = dict(zip(columns, row))
        # Convert last_updated to string
        row_dict['last_updated'] = row_dict['last_updated'].strftime('%Y-%m-%d %H:%M:%S')
        result.append(row_dict)

    cursor.close()
    connection.close()

    return result


# Main producer loop
if __name__ == "__main__":
    last_read_timestamp = "1970-01-01 00:00:00"  # Initial timestamp

    while True:
        try:
            # Fetch data from PostgreSQL
            rows = fetch_data(last_read_timestamp)

            for row in rows:
                data_value = row
                print("Data being sent to Kafka:", data_value)
                # Produce to Kafka
                producer.produce(
                    topic=f'{os.getenv("KAFKA_TOPIC")}',
                    key=str(data_value['id']),
                    value=data_value,
                    on_delivery=delivery_report
                )

            # Flush after producing all messages
            producer.flush()

            # Update last read timestamp
            if rows:
                last_read_timestamp = rows[-1]['last_updated']

        except Exception as e:
            print(f"Error: {e}")

        # Sleep for 2 seconds before fetching again
        time.sleep(2)