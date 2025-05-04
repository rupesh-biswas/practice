import pandas as pd
import json

# === Step 1: Read first 100 rows from CSV ===
df = pd.read_csv("delivery_trip_truck_data.csv", nrows=100)

# === Step 2: Sanitize column names for Avro ===
# Avro allows only letters, numbers, and underscores in field names
df.columns = df.columns.str.strip().str.lower().str.replace(r"[^\w]", "_", regex=True)

# === Step 3: Define Pandas-to-Avro type mapping ===
type_mapping = {
    "object": "string",
    "int64": "long",
    "float64": "double",
    "bool": "boolean",
    "datetime64[ns]": {"type": "long", "logicalType": "timestamp-millis"}
}

# === Step 4: Build the Avro schema fields ===
fields = []
for col, dtype in df.dtypes.items():
    dtype_str = str(dtype)
    avro_type = type_mapping.get(dtype_str, "string")

    # Make all fields nullable, except timestamp (non-nullable logical type)
    is_nullable = not isinstance(avro_type, dict)
    avro_type = ["null", avro_type] if is_nullable else avro_type

    fields.append({
        "name": col,
        "type": avro_type,
        "default": None if is_nullable else 0
    })

# === Step 5: Construct the full Avro schema ===
schema = {
    "type": "record",
    "name": "TripRecord",
    "namespace": "com.example.transport",
    "fields": fields
}

# === Step 6: Save schema to a file ===
with open("schema.avsc", "w") as f:
    json.dump(schema, f, indent=2)

print("✅ Avro schema written to 'schema.avsc'")
