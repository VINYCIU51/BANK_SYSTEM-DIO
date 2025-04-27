import { EmailValidation } from "../validations/email.js";
import { PasswordValidation } from "../validations/pass.js";

// Inicializa as validações
const email = new EmailValidation();
const pass = new PasswordValidation();

// Validação do submit
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let hasError = false;

    // Validação do email
    if (email.isEmpty()) {
        email.alert("Campo obrigatório!");
        hasError = true;
    }
    if (!email.isValid()) {
        email.alert("Formato inválido!");
        hasError = true;
    }

    // Validação da senha
    if (pass.isEmpty()) {
        pass.alert("invalid", "red", "Campo obrigatório!");
        hasError = true;
    }

    if (!hasError) {
        window.location.href = "sign-up.html";
    }
});