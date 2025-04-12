# Make sure to install confluent-kafka python package
# pip install confluent-kafka
# pip install pandas
# uv pip install confluent-kafka pandas python-dotenv

import datetime
import threading
from decimal import *
from time import sleep
from uuid import uuid4, UUID
import time

from confluent_kafka import SerializingProducer
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroSerializer
from confluent_kafka.serialization import StringSerializer
import pandas as pd
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()


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

# Fetch the latest Avro schema for the value
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



# Load the CSV data into a pandas DataFrame
df = pd.read_csv('retail_data.csv')
df = df.dropna(subset=['CustomerID']) 
df = df.fillna('null')
# print(df.head(5))
# print("=====================")

# import sys
# sys.exit(1)

# Iterate over DataFrame rows and produce to Kafka
for index, row in df.iterrows():
    # Create a dictionary from the row values
    data_value = row.to_dict()
    print(data_value)
    # Produce to Kafka
    producer.produce(
        topic=f'{os.getenv("KAFKA_TOPIC")}', 
        key=str(index), 
        value=data_value, 
        on_delivery=delivery_report
    )
    producer.flush()
    time.sleep(2)

print("All Data successfully published to Kafka")
