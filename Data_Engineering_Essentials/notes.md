## Slowly Changing Dimensions (SCD)

1. Type 0: No changes allowed. (static / append only) 

2. Type 1: Previous details are overwritten and no history is maintained. Useful when we donot care about comparisons other than quite recent (use Delta Time Travel)
   
4. Type 2: Adding a new row for each change and marking the old as obsolete. Useful when record product price changes over time, integral to business logic.

5. 
