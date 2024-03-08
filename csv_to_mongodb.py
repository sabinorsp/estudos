import pandas as pd
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

from dotenv import load_dotenv
import json
import os
load_dotenv()

def load_csv_to_dataframe(csv_file):
    """
    Carrega os dados do CSV para um DataFrame do pandas
    """
    return pd.read_csv(csv_file)


def convert_dataframe_to_json(dataframe):
    """
    Converte o DataFrame para uma lista de dicionários JSON
    """
    return json.loads(dataframe.to_json(orient='records'))


def load_json_to_mongodb(json_data, db_name, collection_name,url_mongodb):
    """
    Carrega os dados JSON para o MongoDB
    """
    client = MongoClient(url_mongodb, server_api=ServerApi('1')) 
    db = client[db_name]  
    collection = db[collection_name]  
    collection.insert_many(json_data)  
    client.close()  


# Arquivo CSV de exemplo
csv_file = 'data/Iris.csv'

# Nomes do banco de dados e coleção no MongoDB
db_name = 'viagens'
url_mongodb = os.getenv("url")
collection_name = 'iris'

# Carrega os dados do CSV para um DataFrame
dataframe = load_csv_to_dataframe(csv_file)

# Converte o DataFrame para JSON
json_data = convert_dataframe_to_json(dataframe)

# Carrega os dados JSON para o MongoDB
load_json_to_mongodb(json_data, db_name, collection_name, url_mongodb)
