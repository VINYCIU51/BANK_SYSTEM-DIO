import { EmailValidation } from "../validations/email-validation.js";
import { PasswordValidation } from "../validations/pass-validation.js";

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
    } else if (!email.isValid()) {
        email.alert("Formato inválido!");
        hasError = true;
    } else {
        email.clearAlert();
    }

    // Validação da senha
    if (pass.isEmpty()) {
        pass.alert("invalid", "red", "Campo obrigatório!");
        hasError = true;
    } else {
        pass.clearAlert();
    }

    if (!hasError) {
        window.location.href = "sign-up.html";
    }
});