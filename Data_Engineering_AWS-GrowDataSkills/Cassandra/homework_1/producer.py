import time
import uuid
from confluent_kafka import SerializingProducer
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroSerializer
from confluent_kafka.serialization import StringSerializer
from dotenv import load_dotenv
import os
import pandas as pd


# Load environment variables from .env file
load_dotenv()

# === Kafka delivery report callback ===
def delivery_report(err, msg):
    if err is not None:
        print(f"❌ Delivery failed: {err}")
    else:
        print(f"✅ Message delivered to {msg.topic()} [{msg.partition()}] at offset {msg.offset()}")


# Define Kafka configuration
kafka_config = {
    'bootstrap.servers': f'{os.getenv("KAFKA_BOOTSTRAP_SERVERS")}',
    'sasl.mechanisms': f'{os.getenv("KAFKA_SASL_MECHANISMS")}',
    'security.protocol': f'{os.getenv("KAFKA_SECURITY_PROTOCOL")}',
    'sasl.username': f'{os.getenv("SASL_KAFKA_USERNAME")}',
    'sasl.password': f'{os.getenv("SASL_KAFKA_PASSWORD")}',
}

# Create a Schema Registry client
schema_registry_client = SchemaRegistryClient({
  'url': f'{os.getenv("SCHEMA_REGISTRY_URL")}',
  'basic.auth.user.info': f'{os.getenv("SCHEMA_REGISTRY_API_KEY")}:{os.getenv("SCHEMA_REGISTRY_API_SECRET")}'
})


key_serializer = StringSerializer('utf_8')  # Serialize keys as UTF-8 strings

# Fetch the latest schema dynamically
def get_latest_schema(subject):
    schema = schema_registry_client.get_latest_version(subject).schema.schema_str
    return AvroSerializer(schema_registry_client, schema)


# Producers
trip_producer = SerializingProducer({
    **kafka_config,
    'key.serializer': key_serializer, 
    'value.serializer': get_latest_schema(f'{os.getenv("KAFKA_TOPIC")}-value')
})




# Mock data generation
def generate_orders_data():

    # Read the CSV file, check if first row is header
    df = pd.read_csv("olist_orders_dataset.csv", header=0)

    # List of columns that should be treated as datetime
    date_columns = ['order_purchase_timestamp', 'order_approved_at', 'order_delivered_carrier_date', 'order_delivered_customer_date', 'order_estimated_delivery_date']

    # Convert date columns to datetime and then to integer milliseconds (epoch time)
    for col in date_columns:
        if col in df.columns:
            df[col] = pd.to_datetime(df[col], errors='coerce')
            df[col] = df[col].apply(lambda x: int(x.timestamp() * 1000) if pd.notnull(x) else None)
            df[col] = df[col].astype('Int64')  # Use pandas nullable integer type
    
    # format order_id and customer_id to uuid string
    df['order_id'] = df['order_id'].apply(lambda x: str(uuid.UUID(x)))
    df['customer_id'] = df['customer_id'].apply(lambda x: str(uuid.UUID(x)))
    
    # iterate over each row and produce messages
    for _, row in df.iterrows():
        # The key for each message should be a combination of the 'customer_id' and 'order_id' fields from the dataset.
        key = f"{row['customer_id']}_{row['order_id']}"
        
        # Create a dictionary from the row data
        value = row.to_dict()

        # Ensure all values are JSON serializable (e.g., convert timestamps if needed)
        for k, v in value.items():
            if pd.isna(v):
                value[k] = None
            elif isinstance(v, pd.Timestamp):
                value[k] = v.isoformat()
        print(value)
        # return
    
        # Produce the message
        trip_producer.produce(
            topic=os.getenv("KAFKA_TOPIC"),
            key=key,
            value=value,
            on_delivery=delivery_report
        )

        # Poll to process events and trigger delivery callback
        trip_producer.poll(0)  # Processes the delivery report callback (if any) # It is non-blocking

        # Sleep for a short duration to simulate real-time data generation
        time.sleep(2)

# Generate and send trip data
generate_orders_data()

# Close the producer
trip_producer.flush() # Wait for any outstanding messages to be delivered # This is a blocking call
print("✅ All messages produced successfully.")
