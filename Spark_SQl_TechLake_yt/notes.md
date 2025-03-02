# Notes

## Data Warehousing

1. OLTP -> Online Transactional Processing databases  
Frontend applications and backend will be databases. It can contains transactional databases.

2. OLAP -> Online Analytical Processing databases  
Data warehouse contains olap data. ETL pipelines extract data from oltp databases and store in data warehouses.  
OLAP data is used for analysis.

So, for ETL (Extract, transform, Load) source will be on-premises data (OLTP) and target will be data warehouse (OLAP).

Q. What is data lake?  
Ans: Data lake is a distributed file system with data stored in a hierarchical format.

-- If we drop managed table it will remove data and metadata  
-- If we drop external table it will remove only metadata from spark_catalog. Data will be availabe in the external location.

## Spark SQL

### `Difference between View and Temporary VIEW and Global View`

* `View` Scope is spark catelog. which can be accessed by any user in any session, in any cluster
* `temporary view` scope is User level. This view will be available only on that user. other users cannot accessed. (A single job level)
* `Global Temporary View` Scope is spark session (cluster). This view is available only at spark cluster level. any one can access within the cluster. (Multiple jobs within the cluster)

-> In Spark sql INSERT, DELETE, MERGE is only supported in delta tables

## Slowly Changing Dimensions (SCD)

1. Type 0: No changes allowed. (static / append only) -> Append 

2. Type 1: Previous details are overwritten and no history is maintained. Useful when we donot care about comparisons other than quite recent (use Delta Time Travel) -> Upset (merge) -> Only Latest data
   
3. Type 2: Adding a new row for each change and marking the old as obsolete. Useful when record product price changes over time, integral to business logic. Each record row in this type will have an addtional version or (start_date and end_date) or some flag to represent the current active version and other older versions. -> Upset (merge) -> History data (N number of times) -> History in new row.  
In this we will read from source and target and merge them during the ETL procecss.

4. Type 3: Same as type 2, but only one time or defined history. Like if u want to keep 5 previous history the pre1, prev2 etc 5 columns will be there in the same table and previous and current data will be present in same row accross different columns. -> Upset (merge) -> Only one time history -> History in another column.

## DIfference Between Sort By and Order By

Sort By will sort the data within a partition.  
Whereas Order By will sort all the data irrecpective of the partition created.  

E.g. if partioned by ZIP code and sorted based on age then each zip code will have own order but the entire result will not be ordered based on age column. Where as in case of order by it the entire result will be sorted based on age.

```sql
select /*+ REPARTITION(3,zip_code) */ * from person sort by age 
```

```sql
select /*+ REPARTITION(3,zip_code) */ * from person order by age 
```

## Joins

`EXCEPT` shows unique data from Table1 not present in Table2. `EXCEPT ALL` shows duplicate data in Table1.

```sql
SELECT * FROM person1
EXCEPT
SELECT * FROM person2
```