from flask import request, jsonify, render_template, redirect, url_for
from app.controllers import *
from app import app

# rota para a pagina inicial
@app.route("/")
def home():
    return render_template("presentation.html")

@app.route("/login")
def login():
    return render_template("login.html")