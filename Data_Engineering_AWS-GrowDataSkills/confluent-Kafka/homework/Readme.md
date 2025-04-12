# Kafka and PostgreSQL Integration for Data Engineering

This project demonstrates a data engineering pipeline that integrates **Apache Kafka**, **PostgreSQL**, and **Avro** for real-time data processing and storage. The project is designed to simulate a retail data processing system, where data is produced, consumed, transformed, and stored in a database. The pipeline is containerized using **Docker Compose** for easy deployment and scalability.

---

## Key Components

### 1. Kafka Producer and Consumer
- **Producer (`kafka_mysql_producer.py`)**:
  - Reads data from a PostgreSQL database.
  - Serializes the data using **Avro** format based on the schema defined in `products_online_avro_schema.json`.
  - Publishes the serialized data to a Kafka topic (`products_online`).

- **Consumer (`kafka_consumer_group.py`)**:
  - Consumes data from the Kafka topic.
  - Deserializes the Avro data back into Python objects.
  - Applies transformations:
    - Converts the `category` field to uppercase.
    - Applies business logic to update the `price` field (e.g., discounts for specific categories).
  - Writes the transformed data to JSON files (`results_json/consumer_<n>.json`).

### 2. PostgreSQL Integration
- **Database Initialization (`create_product_table.sql`)**:
  - Creates a `product` table in PostgreSQL to store product data.
  - Table schema includes fields like `id`, `name`, `category`, `price`, and `last_updated`.

- **Data Insertion Script (`insert_dummy_data.py`)**:
  - Generates dummy product data.
  - Inserts the data into the PostgreSQL `product` table at regular intervals.

### 3. Avro Schema
- **Schema Definition (`products_online_avro_schema.json`)**:
  - Defines the structure of the product data for serialization and deserialization.
  - Fields include `id`, `name`, `category`, `price`, and `last_updated`.

### 4. Dockerized Deployment
- **Docker Compose (`docker-compose.yml`)**:
  - Orchestrates the deployment of the following services:
    - **PostgreSQL**: Database for storing product data.
    - **Kafka Producer**: Publishes data to the Kafka topic.
    - **Kafka Consumers**: Processes and transforms data from the Kafka topic.
    - **Data Inserter**: Inserts dummy data into PostgreSQL.
  - Includes health checks for PostgreSQL to ensure readiness before dependent services start.

- **Dockerfile**:
  - Builds a base image for the Python services, including all required dependencies.

### 5. Environment Configuration
- **Environment Variables (`.env`)**:
  - Configures Kafka, Schema Registry, and PostgreSQL connection details.
  - Includes sensitive information like usernames, passwords, and API keys.

---

## Workflow

1. **Data Generation**:
   - `insert_dummy_data.py` generates dummy product data and inserts it into the PostgreSQL database.

2. **Data Publishing**:
   - `kafka_mysql_producer.py` reads data from PostgreSQL, serializes it using Avro, and publishes it to the Kafka topic.

3. **Data Consumption and Transformation**:
   - `kafka_consumer_group.py` consumes data from the Kafka topic, applies transformations, and writes the results to JSON files.

4. **Data Storage**:
   - Transformed data is stored in JSON files (`results_json/`) for downstream processing or analysis.

---

## Prerequisites
- **Docker and Docker Compose**: For containerized deployment.
- **Python 3.12**: For running the scripts locally.
- **Confluent Kafka**: For Kafka and Schema Registry services.

---

## How to Run

1. **Set Up Environment Variables**:
   - Configure the `.env` file with the required Kafka, Schema Registry, and PostgreSQL details.

2. **Build and Start Services**:
   ```bash
   docker-compose up --build
   ```

3. **Monitor Logs**:
   - Use `docker-compose logs -f` to monitor the logs of all services.

4. **Verify Output**:
   - Check the `results_json/` directory for transformed JSON files.

---

## Key Files
- `docker-compose.yml`: Orchestrates the deployment of all services.
- `products_online_avro_schema.json`: Defines the Avro schema for product data.
- `insert_dummy_data.py`: Inserts dummy data into PostgreSQL.
- `kafka_mysql_producer.py`: Publishes data from PostgreSQL to Kafka.
- `kafka_consumer_group.py`: Consumes and transforms data from Kafka.
- `create_product_table.sql`: Initializes the PostgreSQL database schema.

---

## Use Cases
- Real-time data processing pipelines.
- Integration of Kafka with relational databases.
- Demonstration of Avro serialization and deserialization.
- Containerized deployment of data engineering workflows.