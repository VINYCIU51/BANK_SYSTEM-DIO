import { Email } from "../validations/email.js";
import { Password } from "../validations/pass.js";

// Inicializa as validações
const email = new Email();
const pass = new Password();

// Validação do submit
document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let hasError = false;

    // Validação do email
    if (!email.validate()) {
        hasError = true;
    }

    // Validação da senha
    if (!pass.validate()) {
        hasError = true;
    }

    if (!hasError) {
        window.location.href = "sign-up.html";
    }
});