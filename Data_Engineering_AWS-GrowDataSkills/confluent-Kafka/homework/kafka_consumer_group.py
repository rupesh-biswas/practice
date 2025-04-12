import json
from confluent_kafka import DeserializingConsumer
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroDeserializer
from confluent_kafka.serialization import StringDeserializer
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

# Define Kafka configuration
kafka_config = {
    'bootstrap.servers': f'{os.getenv("KAFKA_BOOTSTRAP_SERVERS")}',
    'sasl.mechanisms': f'{os.getenv("KAFKA_SASL_MECHANISMS")}',
    'security.protocol': f'{os.getenv("KAFKA_SECURITY_PROTOCOL")}',
    'sasl.username': f'{os.getenv("SASL_KAFKA_USERNAME")}',
    'sasl.password': f'{os.getenv("SASL_KAFKA_PASSWORD")}',
    'group.id': 'group1',
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

# Data transformation logic
def transform_data(record):
    # Change category to uppercase
    record['category'] = record['category'].upper()

    # Apply discount logic: 10% discount for "ELECTRONICS"
    if record['category'] == "ELECTRONICS":
        record['price'] = round(record['price'] * 0.9, 2)

    return record

# Write transformed data to JSON file
def write_to_json_file(record, file_name):
    # Ensure the directory exists
    os.makedirs(os.path.dirname(file_name), exist_ok=True)
    
    # Open the file in append mode and write the record
    with open(file_name, "a") as json_file:
        json_file.write(json.dumps(record) + "\n")

# Subscribe to the 'retail_data' topic
consumer.subscribe([f'{os.getenv("KAFKA_TOPIC")}'])

# Main consumer loop
if __name__ == "__main__":
    try:
        while True:
            msg = consumer.poll(1.0)  # Poll for messages

            if msg is None:
                print("No message received")
                continue

            if msg.error():
                print(f'Consumer error: {msg.error()}')
                continue

            record = msg.value()

            # Transform data
            transformed_record = transform_data(record)

            # Write to JSON file
            file_name = f"results_json/consumer_{msg.partition()}.json"
            write_to_json_file(transformed_record, file_name)

            print(f"Consumed and transformed record: {transformed_record}")
            print(f"Record written to {file_name}")
            print("---"*20)
            

    except KeyboardInterrupt:
        pass

    finally:
        consumer.close()