from app.models.crud import *

def validate_user_credentials(user_data):
    email = user_data.get("email")
    password = user_data.get("password")

    user = selectElement("users", f"email=? AND password=?", (email,password))

    return user