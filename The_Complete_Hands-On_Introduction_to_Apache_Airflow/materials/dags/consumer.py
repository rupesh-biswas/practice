from airflow import DAG, Dataset
from airflow.decorators import task

from datetime import date, datetime

my_file = Dataset("/tmp/my_file.txt")
my_file_2 = Dataset("/tmp/my_file_2.txt")

with DAG(
    dag_id="consumer",
    schedule=[my_file, my_file_2],
    start_date=datetime(2022, 1, 1),
    catchup=False,
) as dag:
    
    @task()
    def read_dataset():
        with open(my_file.uri, "r") as f:
            print(f.read())
        with open(my_file_2.uri, "r") as f:
            print(f.read())
    read_dataset()