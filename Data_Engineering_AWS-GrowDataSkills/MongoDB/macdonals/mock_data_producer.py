import time
import random
import uuid
from datetime import datetime, timedelta
from confluent_kafka import SerializingProducer
from confluent_kafka.schema_registry import SchemaRegistryClient
from confluent_kafka.schema_registry.avro import AvroSerializer
from confluent_kafka.serialization import StringSerializer
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

def delivery_report(err, msg):
    """
    Reports the failure or success of a message delivery.

    Args:
        err (KafkaError): The error that occurred on None on success.

        msg (Message): The message that was produced or failed.
    """
    if err is not None:
        print(f"Delivery failed for User record {msg.key()}: {err}")
        return
    print(f"User record {msg.key()} successfully produced to {msg.topic()} [{msg.partition()}] at offset {msg.offset()}")
    print("====================================")




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
orders_producer = SerializingProducer({
    **kafka_config,
    'key.serializer': key_serializer, 
    'value.serializer': get_latest_schema(f'{os.getenv("KAFKA_TOPIC_ORDERS")}-value')
})
payments_producer = SerializingProducer({
    **kafka_config, 
    'key.serializer': key_serializer, 
    'value.serializer': get_latest_schema(f'{os.getenv("KAFKA_TOPIC_PAYMENTS")}-value')
})

# Valid McDonald's menu items
menu_items = [
    "Big Mac", "McChicken", "Quarter Pounder", "French Fries", "McFlurry",
    "Filet-O-Fish", "Chicken McNuggets", "Egg McMuffin", "Hash Browns", "Apple Pie"
]

# Mock data generation
def generate_orders_and_payments():
    utc_now = int(datetime.utcnow().timestamp() * 1000)

    for i in range(100):
        # Generate matching order and payment data
        order_id = str(uuid.uuid4())
        customer_id = f"cust_{random.randint(1000, 9999)}"
        order_total = round(random.uniform(10, 100), 2)
        order_time = utc_now - random.randint(0, 24 * 60 * 60 * 1000)  # Random timestamp within 24 hours

        order_items = [
            {"item_name": random.choice(menu_items), "quantity": random.randint(1, 5), "price": round(random.uniform(1, 10), 2)}
            for _ in range(random.randint(1, 3))
        ]

        payment_id = str(uuid.uuid4())
        payment_amount = order_total
        payment_method = random.choice(["credit_card", "cash", "mobile_payment"])
        payment_time = order_time + random.randint(0, 5 * 60 * 1000)  # Random delay after order_time

        # Produce order
        orders_producer.produce(
            topic='macd_orders',
            key=order_id,
            value={
                "order_id": order_id,
                "customer_id": customer_id,
                "order_total": order_total,
                "order_items": order_items,
                "order_time": order_time
            },
            on_delivery=delivery_report
        )
        orders_producer.flush()

        # Produce payment
        payments_producer.produce(
            topic='macd_payments',
            key=payment_id,
            value={
                "payment_id": payment_id,
                "order_id": order_id,
                "payment_amount": payment_amount,
                "payment_method": payment_method,
                "payment_time": payment_time
            },
            on_delivery=delivery_report
        )
        payments_producer.flush()

        time.sleep(2)

# Generate and publish mock data
generate_orders_and_payments()
print("Mock data successfully published.")