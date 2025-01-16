## Slowly Changing Dimensions (SCD)

1. Type 0: No changes allowed. (static / append only) -> Append 

2. Type 1: Previous details are overwritten and no history is maintained. Useful when we donot care about comparisons other than quite recent (use Delta Time Travel) -> Upset (merge) -> Only Latest data
   
3. Type 2: Adding a new row for each change and marking the old as obsolete. Useful when record product price changes over time, integral to business logic. Each record row in this type will have an addtional version or (start_date and end_date) or some flag to represent the current active version and other older versions. -> Upset (merge) -> History data (N number of times) -> History in new row.

4. Type 3: Same as type 2, but only one time or defined history. Like if u want to keep 5 previous history the pre1, prev2 etc 5 columns will be there in the same table and previous and current data will be present in same row accross different columns. -> Upset (merge) -> Only one time history -> History in another column.
