from flask import request, jsonify, render_template, redirect, url_for
from app.controllers.credentials_validate import *
from app import app

# rota para a pagina inicial
@app.route("/")
def home():
    return render_template("presentation.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/sign-up")
def signup():
    return render_template("sign-up.html")

@app.route("/login/validate", methods=["POST"])
def validate_login():
    login_data = request.get_json()
    
    user = validate_to_login(login_data)

    if (user):
        return jsonify({
            "success": True,
            "redirect_url": url_for("home")
        })
    else:
        return jsonify({
            "success": False,
            "error": "Email ou Senha incorretos!"
        }), 401

@app.route("/sign-up/validate", methods=["POST"])
def validate_signup():
    signup_data = request.get_json()

    message, sucess = validate_to_register(signup_data)

    if (sucess):
        return jsonify({
            "success": True,
            "redirect_url": url_for("home")
        })
    else:
        return jsonify({
            "success": False,
            "error": message,
        }), 401