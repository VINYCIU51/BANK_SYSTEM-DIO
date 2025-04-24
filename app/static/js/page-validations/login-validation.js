import { emptyEmail, isValidEmail, invalidEmail, EmailOk } from "../validations/email-validation.js";
import { emptyPass, invalidPass, passOk } from "../validations/pass-validation.js";

// Validação do submit
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let hasError = false;

    // Validação do e-mail
    if (emptyEmail()) {
        invalidEmail("Campo obrigatório!");
        hasError = true;
    } else if (!isValidEmail()) {
        invalidEmail("Formato inválido!");
        hasError = true;
    } else {
        EmailOk();
    }

    // Validação da senha
    if (emptyPass()) {
        invalidPass("Campo obrigatório!");
        hasError = true;
    } else {
        passOk();
    }

    if (!hasError) {
        window.location.href = "sign-up.html";
    }
});