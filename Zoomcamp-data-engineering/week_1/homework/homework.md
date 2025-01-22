# Module 1 Homework: Docker & SQL

In this homework we'll prepare the environment and practice
Docker and SQL

This repository should contain the code for solving the homework.

When your solution has SQL or shell commands and not code
(e.g. python files) file format, include them directly in
the README file of your repository.

## Question 1. Understanding docker first run

Run docker with the `python:3.12.8` image in an interactive mode, use the entrypoint `bash`.

What's the version of `pip` in the image?

- 24.3.1
- 24.2.1
- 23.3.1
- 23.2.1

> Answer  
> 24.3.1

Respose:

```test
Status: Downloaded newer image for python:3.12.8
root@581a18ebbe16:/# pip list
Package Version
------- -------
pip     24.3.1

```

## Question 2. Understanding Docker networking and docker-compose

Given the following `docker-compose.yaml`, what is the `hostname` and `port` that **pgadmin** should use to connect to the postgres database?

```yaml
services:
  db:
    container_name: postgres
    image: postgres:17-alpine
    environment:
      POSTGRES_USER: "postgres"
      POSTGRES_PASSWORD: "postgres"
      POSTGRES_DB: "ny_taxi"
    ports:
      - "5433:5432"
    volumes:
      - vol-pgdata:/var/lib/postgresql/data

  pgadmin:
    container_name: pgadmin
    image: dpage/pgadmin4:latest
    environment:
      PGADMIN_DEFAULT_EMAIL: "pgadmin@pgadmin.com"
      PGADMIN_DEFAULT_PASSWORD: "pgadmin"
    ports:
      - "8080:80"
    volumes:
      - vol-pgadmin_data:/var/lib/pgadmin

volumes:
  vol-pgdata:
    name: vol-pgdata
  vol-pgadmin_data:
    name: vol-pgadmin_data
```

- postgres:5433
- localhost:5432
- db:5433
- postgres:5432
- db:5432

If there are more than one answers, select only one of them

> Answer  
> db:5432

As the service name is used for connection. Docker compose creates network using the service name.

## Prepare Postgres

Run Postgres and load data as shown in the videos
We'll use the green taxi trips from October 2019:

```bash
wget https://github.com/DataTalksClub/nyc-tlc-data/releases/download/green/green_tripdata_2019-10.csv.gz
```

You will also need the dataset with zones:

```bash
wget https://github.com/DataTalksClub/nyc-tlc-data/releases/download/misc/taxi_zone_lookup.csv
```

Download this data and put it into Postgres.

You can use the code from the course. It's up to you whether
you want to use Jupyter or a python script.

## Question 3. Trip Segmentation Count

During the period of October 1st 2019 (inclusive) and November 1st 2019 (exclusive), how many trips, **respectively**, happened:

> NOTE: October 1st 2019 is the pickup time AND November 1st 2019 is the dropoff time.

1. Up to 1 mile
2. In between 1 (exclusive) and 3 miles (inclusive),
3. In between 3 (exclusive) and 7 miles (inclusive),
4. In between 7 (exclusive) and 10 miles (inclusive),
5. Over 10 miles

Answers:

- 104,802; 197,670; 110,612; 27,831; 35,281
- 104,802; 198,924; 109,603; 27,678; 35,189
- 104,793; 201,407; 110,612; 27,831; 35,281
- 104,793; 202,661; 109,603; 27,678; 35,189
- 104,838; 199,013; 109,645; 27,688; 35,202

> Answer  
> 104802; 198924; 109603; 27678; 35189

Query:

```sql
SELECT
    1 as index,
    'Up to 1 mile' AS "Trip Type",
    COUNT(*)
FROM public.green_taxi_trips g
WHERE g.lpep_pickup_datetime::DATE >= '2019-10-01'
AND g.lpep_dropoff_datetime::DATE < '2019-11-01'
AND g.trip_distance <= 1

UNION

SELECT
    2 as index,
    'In between 1 (exclusive) and 3 miles (inclusive)' AS "Trip Type",
    COUNT(*)
FROM public.green_taxi_trips g
WHERE g.lpep_pickup_datetime::DATE >= '2019-10-01'
AND g.lpep_dropoff_datetime::DATE < '2019-11-01'
AND g.trip_distance > 1
AND g.trip_distance <= 3

UNION

SELECT
    3 as index,
    'In between 3 (exclusive) and 7 miles (inclusive)' AS "Trip Type",
    COUNT(*)
FROM public.green_taxi_trips g
WHERE g.lpep_pickup_datetime::DATE >= '2019-10-01'
AND g.lpep_dropoff_datetime::DATE < '2019-11-01'
AND g.trip_distance > 3
AND g.trip_distance <= 7

UNION

SELECT
    4 as index,
    'In between 7 (exclusive) and 10 miles (inclusive)' AS "Trip Type",
    COUNT(*)
FROM public.green_taxi_trips g
WHERE g.lpep_pickup_datetime::DATE >= '2019-10-01'
AND g.lpep_dropoff_datetime::DATE < '2019-11-01'
AND g.trip_distance > 7
AND g.trip_distance <= 10

UNION

SELECT
    5 as index,
    'Over 10 miles' AS "Trip Type",
    COUNT(*)
FROM public.green_taxi_trips g
WHERE g.lpep_pickup_datetime::DATE >= '2019-10-01'
AND g.lpep_dropoff_datetime::DATE < '2019-11-01'
AND g.trip_distance > 10

ORDER BY index;

```

## Question 4. Longest trip for each day

Which was the pick up day with the longest trip distance?
Use the pick up time for your calculations.

Tip: For every day, we only care about one single trip with the longest distance.

- 2019-10-11
- 2019-10-24
- 2019-10-26
- 2019-10-31

> Answer  
> 2019-10-31

Query:

```sql
SELECT
    g.lpep_pickup_datetime:: DATE as day,
    MAX(g.trip_distance) as max_distance
FROM public.green_taxi_trips g
GROUP BY 1
ORDER BY 2 DESC
LIMIT 1;

```

## Question 5. Three biggest pickup zones

Which were the top pickup locations with over 13,000 in
`total_amount` (across all trips) for 2019-10-18?

Consider only `lpep_pickup_datetime` when filtering by date.

- East Harlem North, East Harlem South, Morningside Heights
- East Harlem North, Morningside Heights
- Morningside Heights, Astoria Park, East Harlem South
- Bedford, East Harlem North, Astoria Park

> Answer  
> East Harlem North, East Harlem South, Morningside Heights

Query:

```sql
SELECT
    g."PULocationID",
    CONCAT(zpu."Borough", '/', zpu."Zone"),
    SUM(total_amount) as location_total_amount
FROM public.green_taxi_trips g
JOIN public.zones zpu ON zpu."LocationID" = g."PULocationID"
WHERE g.lpep_pickup_datetime::DATE = '2019-10-18'
GROUP BY 1, 2
HAVING SUM(total_amount) > 13000
ORDER BY 2 DESC
```

## Question 6. Largest tip

For the passengers picked up in October 2019 in the zone
named "East Harlem North" which was the drop off zone that had
the largest tip?

Note: it's `tip` , not `trip`

We need the name of the zone, not the ID.

- Yorkville West
- JFK Airport
- East Harlem North
- East Harlem South

> Answer  
> "East Harlem North"

Query:

```sql
SELECT
    zpu."Zone" AS pickup_zone,
    zdo."Zone" AS dropoff_zone,
    g.tip_amount
FROM public.green_taxi_trips g
JOIN public.zones zpu ON zpu."LocationID" = g."PULocationID"
JOIN public.zones zdo ON zdo."LocationID" = g."PULocationID"
WHERE g.lpep_pickup_datetime::DATE BETWEEN '2019-10-01' AND '2019-10-31'
AND zpu."Zone" = 'East Harlem North'
ORDER BY 3 DESC
LIMIT 1;
```

## Terraform

In this section homework we'll prepare the environment by creating resources in GCP with Terraform.

In your VM on GCP/Laptop/GitHub Codespace install Terraform.
Copy the files from the course repo
[here](../../../01-docker-terraform/1_terraform_gcp/terraform) to your VM/Laptop/GitHub Codespace.

Modify the files as necessary to create a GCP Bucket and Big Query Dataset.

## Question 7. Terraform Workflow

Which of the following sequences, **respectively**, describes the workflow for:

1. Downloading the provider plugins and setting up backend,
2. Generating proposed changes and auto-executing the plan
3. Remove all resources managed by terraform`

Answers:

- terraform import, terraform apply -y, terraform destroy
- teraform init, terraform plan -auto-apply, terraform rm
- terraform init, terraform run -auto-approve, terraform destroy
- terraform init, terraform apply -auto-approve, terraform destroy
- terraform import, terraform apply -y, terraform rm

> Answer  
> terraform init, terraform apply -auto-approve, terraform destroy

## Submitting the solutions

- Form for submitting: [https://courses.datatalks.club/de-zoomcamp-2025/homework/hw1](https://courses.datatalks.club/de-zoomcamp-2025/homework/hw1)
