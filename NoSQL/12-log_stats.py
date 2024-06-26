#!/usr/bin/env python3
"""log stats"""

from pymongo import MongoClient

METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"]

def log_stats(mongo_collection, option=None):
    """provides stats about Nginx logs stored in MongoDB"""
    
    if option:
        value = mongo_collection.count_documents({"method": {"$regex": option}})
        print(f"\tmethod {option}: {value}")
        return

    total_logs = mongo_collection.count_documents({})
    print(f"{total_logs} logs")
    print("Methods:")
    for method in METHODS:
        count = mongo_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")
    status_check = mongo_collection.count_documents({"path": "/status"})
    print(f"{status_check} status check")

if __name__ == "__main__":
    mongo_collection = MongoClient('mongodb://127.0.0.1:27017').logs.nginx
    log_stats(mongo_collection)
