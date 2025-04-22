import { emptyEmail, validEmail, emailError, emailInput } from "./email-validation.js";
import { emptyPass, passError, passInput } from "./pass-validaion.js";

// Validação do submit
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    let hasError = false;

    // Validação do e-mail
    if (emptyEmail()) {
        emailInput.classList.add("invalid");
        emailError.textContent = "Campo obrigatório!";
        hasError = true;
    } else if (!validEmail()) {
        emailInput.classList.add("invalid");
        emailError.textContent = "Formato inválido!";
        hasError = true;
    } else {
        emailInput.classList.remove("invalid");
        emailError.textContent = "";
    }

    // Validação da senha
    if (emptyPass()) {
        passInput.classList.add("invalid");
        passError.textContent = "Campo obrigatório!";
        hasError = true;
    } else {
        passInput.classList.remove("invalid");
        passError.textContent = "";
    }

    if (!hasError) {
        window.location.href = "sign-up.html";
    }
});
