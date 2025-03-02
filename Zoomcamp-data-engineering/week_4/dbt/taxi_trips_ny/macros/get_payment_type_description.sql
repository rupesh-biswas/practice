{#
    This macro returns the description of the payment_type 
#}

{% macro get_payment_type_description(payment_type) -%}

    case SAFE_CAST(SAFE_CAST(payment_type AS FLOAT64) AS INT64)
            when 1 then 'Credit card'
            when 2 then 'Cash'
            when 3 then 'No charge'
            when 4 then 'Dispute'
            when 5 then 'Unknown'
            when 6 then 'Voided trip'
            else 'EMPTY'
    end

{%- endmacro %}