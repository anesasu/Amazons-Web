import time
from flask import Flask

app = Flask(__name__)

next_id = 1

@app.route('/getClientID')
def getClientID():
    global next_id

    id = next_id
    next_id += 1

    return {
        'id': id
    }
