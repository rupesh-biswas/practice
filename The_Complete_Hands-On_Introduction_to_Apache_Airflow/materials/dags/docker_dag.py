from airflow.decorators import dag, task
from airflow.providers.docker.operators.docker import DockerOperator

from datetime import datetime

@dag(start_date=datetime(2021, 1, 1), schedule_interval='@daily', catchup=False)
def docker_dag():

    @task()
    def t1():
        pass

    t2 = DockerOperator(
        task_id='t2',
        image='python:3.8-slim-buster',
        command="echo 'command running in the docker container'",
        docker_url="unix://var/run/docker.sock",
        network_mode="bridge"
    )

    t1() >> t2

dag = docker_dag()