-- Orders Stream

CREATE STREAM macd_orders_stream (
    order_id STRING,
    customer_id STRING,
    order_total DOUBLE,
    order_items ARRAY<STRUCT<item_name STRING, quantity INT, price DOUBLE>>,
    order_time TIMESTAMP
) WITH (
  KAFKA_TOPIC = 'macd_orders',
    KEY_FORMAT = 'KAFKA',
    VALUE_FORMAT = 'AVRO',
    TIMESTAMP = 'order_time'
);

-- Payments stream

CREATE STREAM macd_payments_stream (
    payment_id STRING,
    order_id STRING,
    payment_amount DOUBLE,
    payment_method STRING,
    payment_time TIMESTAMP
) WITH (
    KAFKA_TOPIC = 'macd_payments',
    KEY_FORMAT = 'KAFKA',
    VALUE_FORMAT = 'AVRO',
    TIMESTAMP = 'payment_time'
);

-- Join stream

CREATE STREAM maacd_orders_payments_joined AS
SELECT 
    o.order_id AS order_id,
    o.customer_id AS customer_id,
    o.order_total AS order_total,
    o.order_items AS order_items,
    o.order_time AS order_time,
    p.payment_id AS payment_id,
    p.payment_amount AS payment_amount,
    p.payment_method AS payment_method,
    p.payment_time AS payment_time
FROM macd_orders_stream o
INNER JOIN macd_payments_stream p
    WITHIN 24 HOURS
    ON o.order_id = p.order_id
EMIT CHANGES;

