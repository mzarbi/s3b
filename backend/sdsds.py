import time
import requests

while True:
    print("ok")
    requests.get('http://localhost:5000/message')
    time.sleep(10)