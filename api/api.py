import time
import uuid
from flask import Flask, request

app = Flask(__name__)

clients = {}
next_id = 1
lobbies = []

@app.route('/getClientID')
def getClientID():
    global next_id

    id = next_id
    next_id += 1

    client_uuid = str(uuid.uuid4())
    clients[client_uuid] = {
        'username': 'Guest' + str(id)
    }

    return {
        'id':   id,
        'uuid': client_uuid
    }

@app.route('/createLobby', methods=['POST'])
def createLobby():
    lobby = {
        'name':  request.get_json()['name'],
        'owner': clients[request.get_json()['uuid']]['username']
    }

    lobbies.append(lobby)
    return {
        'lobbies': lobbies
    }

@app.route('/getLobbies')
def getLobbies():
    return {
        'lobbies': lobbies
    }
