import { emptyEmail, isValidEmail, invalidEmail, EmailOk } from "../validations/email-validation.js";
import { emptyPass, invalidPass, passOk, isEqualPass, viewPassword } from "../validations/pass-validation.js";

document.querySelector(".view-password").addEventListener("click", viewPassword);

document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();

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
        invalidPass("Senhas não coincidem!");
        hasError = true;
    }







    else {
        passOk();
    }

    if (!hasError) {
        window.location.href = "login.html";
    }
});