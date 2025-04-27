import { ViewPassword } from "../utils/buttons/viewPassword.js";
import { ConfirmPassword } from "../validations/confirmPass.js";
import { Cpf } from "../validations/cpf.js";
import { Email } from "../validations/email.js";
import { Password } from "../validations/pass.js";
import { Phone } from "../validations/phone.js";

// Inicializa as validações
const email = new Email();
const pass = new Password();
const confirmPass = new ConfirmPassword();
const phone = new Phone();
const cpf = new Cpf();


//  monitora o click do botao
document.querySelectorAll(".view-password").forEach(button => {
    button.addEventListener("click", (event) => ViewPassword.view(event));
});

// Monitora cada digito no campo senha para calculo de força
pass.input.addEventListener("input", () => {
    if (pass.isEmpty() ? pass.clearAlert() : pass.calculeStrong());
});


// monitora o envio do formulario
document.getElementById("signupForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let hasError = false;

    if (!cpf.validate()) {
        hasError = true;
    }

    // validacao de telefone
    if (!phone.validate()) {
        hasError = true;
    }

    // Validação do e-mail
    if (!email.validate()) {
        hasError = true;
    }

    // Validação da senha
    if (!pass.validate()) {
        hasError = true;
    }
    if (!confirmPass.validate()) {
        hasError = true;
    }

    if (!hasError) {
        window.location.href = "login.html";
    }
});