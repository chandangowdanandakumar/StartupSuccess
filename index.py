from crypt import methods
from unittest import result
from flask import Flask,render_template,request,send_file,send_from_directory,jsonify
app = Flask(__name__)
# app.config["DEBUG"] = True

@app.route('/',methods=['POST','GET'])
def app():
  return 'hello world'

if __name__ == '__main__':
  app.run()