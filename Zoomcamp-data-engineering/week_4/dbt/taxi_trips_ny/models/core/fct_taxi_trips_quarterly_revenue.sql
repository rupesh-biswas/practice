{{
    config(
        materialized='table'
    )
}}

WITH quarterly_revenue AS (
    SELECT 
        service_type,
        year,
        quarter,
        year_quarter,
        SUM(total_amount) AS quarterly_revenue
    FROM {{ ref('fact_trips') }}  -- Referencing the base fact table
    GROUP BY 1, 2, 3, 4
),

yoy_growth AS (
    SELECT 
        curr.service_type,
        curr.year,
        curr.quarter,
        curr.year_quarter,
        curr.quarterly_revenue,
        prev.quarterly_revenue AS prev_year_revenue,
        -- Compute Year-over-Year (YoY) Growth Percentage
        ROUND(((curr.quarterly_revenue - prev.quarterly_revenue) / NULLIF(prev.quarterly_revenue, 0)) * 100, 2) AS yoy_growth_pct
    FROM quarterly_revenue curr
    LEFT JOIN quarterly_revenue prev 
        ON curr.service_type = prev.service_type
        AND curr.year = prev.year + 1
        AND curr.quarter = prev.quarter
)

SELECT * FROM yoy_growth;
