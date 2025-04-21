# make sure to install pymongo library
# pip install pymongo

from pymongo import MongoClient

from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# MongoDB connection string
# conn_string = "mongodb+srv://shashankde219:GrowDataSkills219@mongo-db-cluster.0iwho.mongodb.net/?retryWrites=true&w=majority&appName=mongo-db-cluster"
conn_string = os.getenv("MONGO_DB_CONNECTION_STRING")

# Connect to MongoDB
client = MongoClient(conn_string)

# Select the database
db = client['airbnb']

# Select the collection
collection = db['reviews']

# Insert a document
# insert_result = collection.insert_one({'name': 'John Doe', 'age': 30})
# print(f"Document inserted with id: {insert_result.inserted_id}")

# Query the collection
# find_query = {'property_type' : 'Apartment', 'room_type': 'Private room'}
# find_query = { '$or' : [ {'property_type' : 'House'} , {'property_type' : 'Apartment'} ] }
# find_query = { 'room_type': 'Private room', 
#                '$or' : [ {'property_type' : 'House'} , {'property_type' : 'Apartment'} ] 
#             }
# SELECT *
# FROM reviews
# WHERE room_type = 'Private room'
# AND (property_type = 'House' OR property_type = 'Apartment')

find_query = { 'accommodates': { '$gt' : 2} } 
#gt - greater than, lt - less than, gte - greater than or equal to, lte - less than or equal to, 
# eq - equal to, ne - not equal to, in - in a list, nin - not in a list,

count_results = collection.count_documents(find_query)
print("Total Documents Found : ",count_results)
print("===========================")

# Print documents fetched from find query
# find_results = collection.find(find_query)
# for doc in find_results:
#     print(doc)
#     break



# grp1 = [
#     {
#         "$group": {
#             "_id": "$address.country",  # Field to group by
#             "avg_price": {"$avg": "$price"}  # Field to avg
#         }
#     },
#     {
#         "$project": {
#             "country": "$_id",
#             "country_wise_avg_price": {"$toDouble": "$avg_price"},
#             "_id" : 0
#         }
#     }
# ]

grp2 = [
    {
        "$group": {
            "_id": {
                "country": "$address.country",
                "city": "$address.suburb"
            },
            "avg_price": {"$avg": "$price"}
        }
    },
    {
        "$project": {
            "country": "$_id.country",
            "city": "$_id.city",
            "city_wise_avg_price": {"$toDouble": "$avg_price"},
            "_id": 0
        }
    }
]


results = collection.aggregate(grp2)
for result in results:
    print(result)


# Close the connection
client.close()