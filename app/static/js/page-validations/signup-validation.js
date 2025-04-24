import { emptyEmail, isValidEmail, invalidEmail, EmailOk } from "../validations/email-validation.js";
import { emptyPass, invalidPass, passOk, isEqualPass, viewPassword, diferentPass } from "../validations/pass-validation.js";

document.querySelectorAll(".view-password").forEach(button => {
    button.addEventListener("click", viewPassword);
});

document.getElementById("signupForm").addEventListener("submit", (event) => {
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
    } else if (!isEqualPass()) {
        diferentPass("Senhas divergentes!");
        hasError = true;
    }







    else {
        passOk();
    }

    if (!hasError) {
        window.location.href = "login.html";
    }
});