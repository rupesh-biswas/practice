-- Mock data
{
  "order_id" : "od_001",
  "customer_id" : "cust_001",
  "item" : "Shirt",
  "amount" : 100.5
}

-- Create stream for specific kafka topic
CREATE STREAM orders_raw_test_stream
( 
  order_id STRING,
  customer_id STRING,
  item STRING,
  amount DOUBLE
) WITH (
  KAFKA_TOPIC='orders_raw_test',
  VALUE_FORMAT='JSON'
);

-- Create stream from query
CREATE STREAM orders_filtered AS
SELECT * FROM orders_raw_test_stream WHERE item = 'Shirt' EMIT CHANGES;

-- Create table
CREATE TABLE item_aggregation AS 
SELECT 
item,
count(*) as total_count
FROM orders_raw_test_stream GROUP BY item;

-- Delete stream
DROP STREAM orders_filtered;