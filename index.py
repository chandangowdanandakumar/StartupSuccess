from crypt import methods
from unittest import result
from flask import Flask
app = Flask(__name__)
# app.config["DEBUG"] = True

@app.route('/')
def hello_world():
  return 'Hello from Flask!'

@app.route('/startup')
def startup():
    result = {'startup':'true'}
    return str(result)

if __name__ == '__main__':
  app.run()