import { ConfirmPassValidation } from "../validations/confirmPass.js";
import { EmailValidation } from "../validations/email.js";
import { PasswordValidation } from "../validations/pass.js";

// Inicializa as validações
const email = new EmailValidation();
const pass = new PasswordValidation();
const confirmPass = new ConfirmPassValidation();

//  monitora o click do botao
document.querySelectorAll(".view-password").forEach(button => {
    button.addEventListener("click", (event) => pass.view(event));
});

// Monitora cada digito no campo senha para calculo de força
if (pass.input) {
    pass.input.addEventListener("input", () => {
        if (pass.input.value.trim() === "") {
            return;
        }
        pass.clearAlert();
        pass.strong();
    });
}

// monitora o envio do formulario
document.getElementById("signupForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let hasError = false;

    // Validação do e-mail
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
    } else if (!confirmPass.confirmed()) {
        confirmPass.alert("Senhas divergentes!");
        hasError = true;
    }
    else {
        pass.clearAlert();
        confirmPass.clearAlert();
    }

    if (!hasError) {
        window.location.href = "login.html";
    }
});