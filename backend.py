from flask import Flask
from flask import jsonify
from flask_cors import CORS
import logging
import time

logging.getLogger('flask_cors').level = logging.DEBUG

app = Flask(__name__)
CORS(app)

@app.route('/sample')
def hello():
    time.sleep(5)
    return jsonify({
        "msg" : 'hello'
    })
