import time
from flask import Flask, request

app = Flask(__name__)

next_id = 1
lobbies = []

@app.route('/getClientID')
def getClientID():
    global next_id

    id = next_id
    next_id += 1

    return {
        'id': id
    }

@app.route('/createLobby', methods=['POST'])
def createLobby():
    lobby = {
        'name': request.get_json()['name']
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
