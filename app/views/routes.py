from flask import request, jsonify, render_template, redirect, url_for
from app.controllers.register_user import *
from app.controllers.login_controller import *
from app import app

# rota para a pagina inicial
@app.route("/")
def home():
    return render_template("presentation.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/login/validate", methods=["POST"])
def validate_login():
    login_data = request.get_json()
    
    user = validate_user_credentials(login_data)

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