from app.models.crud import *

def validate_to_login(user_data):
    email = user_data.get("email")
    password = user_data.get("password")

    user = selectElement("users", f"email=? AND password=?", (email,password))

    return user

def validate_to_register(user_data):
    message = ""
    sucess = False
    email = user_data.get("email")

    data = {
        "full_name": user_data.get("name"),
        "mother_name": user_data.get("mother_name"),
        "cpf": user_data.get("cpf"),
        "nationality": user_data.get("nationality"),
        "zip_code": user_data.get("zip_code"),
        "birth_date": user_data.get("birth_date"),
        "phone_number": user_data.get("phone_number"),
        "email": user_data.get("email"),
        "password": user_data.get("password"),
        "account_number": None,
        "balance": 0.0
    }

    # verifica se o email ta disponivel
    email_used = selectElement("users", f"email = '{email}'")
    
    if email_used:
        message = "Email em uso"
        sucess = False
    else:
        sucess = True
        addElement("users", data)


    return message, sucess