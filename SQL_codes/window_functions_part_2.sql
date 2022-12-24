SELECT * FROM product;

-- FIRST_VALUE
-- Write query to display the most expensive product under each category (corresponding to each record)

SELECT *,
first_value(product_name) over(partition by product_category order by price desc) as most_exp_product
FROM product;

-- LAST_VALUE
-- Write query to display the least eaxpensive product under each category (Corresponding to each record)
SELECT *,
first_value(product_name) over(partition by product_category order by price desc) as most_exp_product,
last_value(product_name) over(partition by product_category order by price desc
        range between unbounded preceding and current row) as least_exp_product
FROM product
WHERE product_category='Phone'
ORDER BY price;

SELECT *,
first_value(product_name) over(partition by product_category order by price desc) as most_exp_product,
last_value(product_name) over(partition by product_category order by price desc
        range between 2 preceding and 2 following) as least_exp_product
FROM product
ORDER BY product_category;

-- Alternate way to wirte SQL query using window functions
SELECT *,
first_value(product_name) over w as most_exp_product,
last_value(product_name) over w as least_exp_product
FROM product
window w as (partition by product_category order by price desc
        range between unbounded preceding and unbounded following)
ORDER BY product_category;

-- NTH_VALUE
-- Write query to display the Second most expensive product under each category
SELECT *,
first_value(product_name) over w as most_exp_product,
last_value(product_name) over w as least_exp_product,
nth_value(product_name, 2) over w as second_most_exp_product
FROM product
window w as (partition by product_category order by price desc
        range between unbounded preceding and unbounded following)
ORDER BY product_category;

-- NTILE
-- Write a query to segregate all the expensive phones, mid range phones and the cheaper phones (3 buckets)
SELECT product_name,
case when x.buckets = 1 then 'Expensive Phones'
     when x.buckets = 2 then 'Mid Range Phones'
     when x.buckets = 3 then 'Cheaper Phones' END phone_category
FROM (
        SELECT *,
        ntile(3) over (order by price desc) as buckets
        FROM product
        WHERE product_category='Phone') x
ORDER BY phone_category;

-- CUME_DIST (cumulative distribution)
/* Value --> 1 <= CUME_DIST > 0 */
/* Formula = Current Row no (or Row No with value same as current row) / Total no of rows */

-- Query to fetch all products which are constituting the first 30% of the data in products table based on price.

SELECT product_name, (cume_dist_percentage || '%') as cume_dist_percentage
FROM (
        SELECT *,
        cume_dist() over (order by price desc) as cume_distribution,
        round(cume_dist() over (order by price desc) ::numeric * 100 , 2) as cume_dist_percentage
        FROM product) x
WHERE x.cume_dist_percentage <=30;

-- PERCENT_RANK (relative rank of the current row / Percentage Ranking)
/* Value --> 1 <= PERCENT_RANK > 0 */
/* FORMULA = Current Row No - 1 / Total no of rows -1 */

-- Query to identify how much percentage more expensive is "Galaxy Z Fold 3" when compared to all products.

SELECT product_name, per_rank
FROM (
        SELECT *,
        percent_rank() over(order by price) as percentage_rank,
        round(percent_rank() over(order by price)::numeric * 100, 2) as per_rank
        FROM product) x
WHERE x.product_name = 'Galaxy Z Fold 3';









