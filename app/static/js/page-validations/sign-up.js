import { Alert } from "../utils/alerts.js";
import { ViewPassword } from "../utils/buttons/viewPassword.js";
import { BirthDate } from "../validations/birthDate.js";
import { ConfirmPassword } from "../validations/confirmPass.js";
import { Cpf } from "../validations/cpf.js";
import { Email } from "../validations/email.js";
import { Password } from "../validations/pass.js";
import { Phone } from "../validations/phone.js";
import { Names } from "../validations/names.js";

// Inicializa as validações
const email = new Email();
const pass = new Password();
const confirmPass = new ConfirmPassword();
const phone = new Phone();
const cpf = new Cpf();
const birthDate = new BirthDate();
const names = new Names();


//  monitora o click do botao
document.querySelectorAll(".view-password").forEach(button => {
    button.addEventListener("click", (event) => ViewPassword.view(event));
});

// Monitora cada digito no campo senha para calculo de força
pass.input.addEventListener("input", () => {
    if (pass.isEmpty() ? Alert.clear(pass.input, pass.error) : pass.calculeStrong());
});


// monitora o envio do formulario
document.getElementById("signupForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let hasError = false;

    // validacao de nome
    if (!names.validate()) {
        hasError = true;
    }

    // validacao de data de nascimento
    if (!birthDate.validate()) {
        hasError = true;
    }

    // validacao de cpf
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

    // validacao da confirmacao de senha
    if (!confirmPass.validate()) {
        hasError = true;
    }

    if (!hasError) {
        window.location.href = "login.html";
    }
});