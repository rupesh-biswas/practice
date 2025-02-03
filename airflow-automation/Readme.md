# Airflow Notes

## Installation

1. Create virtual env

```bash
python3 -m venv airflow_venv

source airflow_venv/bin/activate
```

2. Install the required dependencis

```bash
pip install pandas s3fs
```

3. Install apache-airflow

```bash
pip install apache-airflow
```

4. Start Airflow development environment

```bash
airflow standalone
```
