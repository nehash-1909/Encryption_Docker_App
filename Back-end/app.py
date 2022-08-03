from flask import Flask, render_template, request, flash
import flask
import rsa
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
app.secret_key = "manbearpig_MUDMAN888"
CORS(app)

mongodb_client = PyMongo(app, uri="mongodb://localhost:27017/docker_db_app")
db = mongodb_client.db

@app.route("/")
def index():
	return_string = {'App Type' : 'Encryption App'}
	return return_string

@app.route("/encrypt/<string:name>", methods=['POST', 'GET'])
def encrypt_algo(name):
	publicKey, privateKey = rsa.newkeys(512)
 
	# this is the string that we will be encrypting
	message = str(name)
 
	# rsa.encrypt method is used to encrypt
	# string with public key string should be
	# encode to byte string before encryption
	# with encode method
	encMessage = rsa.encrypt(message.encode(),
                         publicKey)
	
	return_string = {'Encrypted String' : str(encMessage)}
	db_entry = {'string': message, 'encrypted': str(encMessage)}
	print(db_entry)
	db.docker_app_db.insert_one(db_entry)
	return return_string

if __name__ == '__main__':
    app.run(host='0.0.0.0')