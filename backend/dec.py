import base64


with open("sss.txt",'rb') as f:
    with open("sss.zip","wb") as g:
        g.write(base64.b64decode(f.read()))