# Steps to install

## Install docker

```bash
sudo yum update -y
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ec2-user

docker --version

```

## Install docker compose with the system architecture bassed as variable i.e. Linux and x86_64

uname -s -> Linux
uname -m -> x86_64

```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

## Install airflow

Make the directory

```bash
mkdir ~/airflow && cd ~/airflow
```

Download the latest airflow docker compose

```bash
curl -LfO 'https://airflow.apache.org/docs/apache-airflow/2.10.4/docker-compose.yaml'
```

Initalize airflow

```bash
echo -e "AIRFLOW_UID=$(id -u)\nAIRFLOW_GID=0" > .env
docker-compose up airflow-init
```

Start airflow

```bash
docker-compose up -d
```

## Configure local VS Code to edit the dags

1. Add the host to local user .ssh config.

2. Use the VS code remote host connect plugin to connect.
