import flask
from flask import request
from flask_cors import CORS

import announcer

app = flask.Flask(__name__)
CORS(app)
announcer = announcer.MessageAnnouncer()


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/listen', methods=['GET'])
def listen():
    def stream():
        messages = announcer.listen()  # returns a queue.Queue
        while True:
            msg = messages.get()  # blocks until a new message arrives
            yield msg

    response = flask.Response(stream(), mimetype='text/event-stream')

    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response


@app.route('/ping')
def ping():
    msg = format_sse(data='pong')
    announcer.announce(msg=msg)
    return {}, 200


@app.route('/message')
def mff():
    msg = format_sse(data="Hellloo",event="notification")
    announcer.announce(msg=msg)
    return {}, 200


def format_sse(data: str, event=None) -> str:
    msg = f'data: {data}\n\n'
    if event is not None:
        msg = f'event: {event}\n{msg}'
    return msg
