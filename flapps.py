from flask import Flask

app = Flask(__name__)

@app.route('/welcome')
def welcome_page():
    return "Welcome to my Flask Application"

@app.route('/welcome/home')
def welcome_home():
    return "Welcome Home WHATS UP!!"

@app.route('/welcome/back')
def welcome_back():
    return "Welcome BACK YOU MISSED US?"