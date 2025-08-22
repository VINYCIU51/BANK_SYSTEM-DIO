from app.models.crud import *

# adiciona usuario
def add_new_user(data):
    email = data.get("email")

    # verifica se o email ta disponivel
    email_used = selectElement("usuarios", f"email = '{email}'")
    if email_used:
        return {"error": "Email em uso"}, 409

    user_data = {
        "nome": data.get("nome"),
        "telefone": data.get("telefone"),
        "email": data.get("email"),
        "cidade": data.get("cidade"),
        "data_nascimento": data.get("data_nascimento")
    }

    addElement("usuarios", user_data)
    return {"message": "Usuário cadastrado com sucesso!"}, 201