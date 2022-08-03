# import pymongo

# myclient = pymongo.MongoClient("mongodb://localhost:27017/")
# mydb = myclient["encrypted_db"]
# mycol = mydb["encrypted_table"]

# mydict = { "abc": "DMCLdmfclmwlNVLCNWLVNLNWRLFNLWELFNWR"}

# x = mycol.insert_one(mydict)

from flask_pymongo import PyMongo
import flask

app = flask.Flask(__name__)
mongodb_client = PyMongo(app, uri="mongodb://localhost:27017/encrypted_database")
db = mongodb_client.db

@app.route("/add_one")
def add_one():
    db.database_docker.insert_one({"abc": "DGJQEJDJCDLEJDEJWNNnkwnedknwke"})
    return flask.jsonify(message="success")

if __name__ == '__main__':
    app.run(host='0.0.0.0')