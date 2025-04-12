# Make sure to install confluent-kafka python package
# pip install confluent-kafka

import threading
from confluent_kafka import DeserializingConsumer
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroDeserializer
from confluent_kafka.serialization import StringDeserializer
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

import os

# Define Kafka configuration
kafka_config = {
    'bootstrap.servers': f'{os.getenv("KAFKA_BOOTSTRAP_SERVERS")}',
    'sasl.mechanisms': f'{os.getenv("KAFKA_SASL_MECHANISMS")}',
    'security.protocol': f'{os.getenv("KAFKA_SECURITY_PROTOCOL")}',
    'sasl.username': f'{os.getenv("SASL_KAFKA_USERNAME")}',
    'sasl.password': f'{os.getenv("SASL_KAFKA_PASSWORD")}',
    'group.id': 'group2',
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

#Continually read messages from Kafka
try:
    while True:
        msg = consumer.poll(1.0) # How many seconds to wait for message

        if msg is None:
            continue
        if msg.error():
            print(f'Consumer error: {msg.error()}')
            continue

        print(f'Successfully consumed record with key {msg.key()} and value {msg.value()}')

except KeyboardInterrupt:
    pass
finally:
    consumer.close()