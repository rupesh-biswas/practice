# Install using only python

## Check for updated

```bash
sudo yum update -y
```

## Install airflow

```bash
python3 -m venv airflow-venv
source airflow-venv/bin/activate
pip3 install apache-airflow
pip3 install pandas s3fs
```

## Start airflow

```bash
airflow standalone
```
