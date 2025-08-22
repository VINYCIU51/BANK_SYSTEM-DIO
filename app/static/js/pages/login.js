import { Email } from "../validations/email.js";
import { Password } from "../validations/pass.js";

// Inicializa as validações
const email = new Email();
const pass = new Password();

// Validação do submit
document.getElementById("loginForm").addEventListener("submit", async (event) => {
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
        const form_data = {
            "email": email.input.value,
            "password": pass.input.value
        };

        const response = await fetch("/login/validate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form_data)
        });

        const result = await response.json();

        if (response.ok && result.success) {
            window.location.href = result.redirect_url;
        } else {
            alert(result.error || "Erro ao logar!");
        }
    }
});