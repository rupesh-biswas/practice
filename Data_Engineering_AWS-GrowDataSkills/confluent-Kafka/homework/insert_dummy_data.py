import time
import random
import psycopg2
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

# Database connection details
db_config = {
    'dbname': os.getenv('POSTGRES_DB', 'mydatabase'),
    'user': os.getenv('POSTGRES_USER', 'user'),
    'password': os.getenv('POSTGRES_PASSWORD', 'password'),
    'host': os.getenv('POSTGRES_HOST', 'localhost'),
    'port': int(os.getenv('POSTGRES_PORT', 5432))
}

# Function to generate dummy data
def generate_dummy_data():
    categories = ['Electronics', 'Clothing', 'Books', 'Home', 'Toys']
    return {
        'name': f'Product-{random.randint(1, 1000)}',
        'category': random.choice(categories),
        'price': round(random.uniform(10.0, 500.0), 2),
        'last_updated': time.strftime('%Y-%m-%d %H:%M:%S')
    }

# Function to insert data into the product table
def insert_data_to_db(data):
    try:
        connection = psycopg2.connect(**db_config)
        cursor = connection.cursor()

        insert_query = """
        INSERT INTO product (name, category, price, last_updated)
        VALUES (%s, %s, %s, %s)
        ON CONFLICT (id) DO UPDATE SET
        name = EXCLUDED.name,
        category = EXCLUDED.category,
        price = EXCLUDED.price,
        last_updated = EXCLUDED.last_updated;
        """

        cursor.execute(insert_query, (data['name'], data['category'], data['price'], data['last_updated']))
        connection.commit()
        print("Data inserted successfully")

    except Exception as e:
        print(f"Error: {e}")

    finally:
        if cursor:
            cursor.close()
        if connection:
            connection.close()

# Main loop to insert data every 2 seconds
if __name__ == "__main__": 
    while True:
        dummy_data = generate_dummy_data()
        insert_data_to_db(dummy_data)
        print(f"Inserted: {dummy_data}")
        time.sleep(2)