export const passInput = document.getElementById("password");
export const passError = document.getElementById("password-error");

export const confirmPassInput = document.getElementById("confirm-password");
export const confirmPassError = document.getElementById("confirmPass-error");

export const toggleButton = document.querySelector(".view-password i");

// exibe um alerta na senha
export function passAlert(type, color, menssage) {
    passOk(); // reseta alguma cor residual

    passInput.classList.add(type);
    passError.style.color = color;
    passError.textContent = menssage;
}

// remove o alerta de erro da senha
export function passOk() {
    passInput.classList.remove("invalid", "weak", "strong");
    passError.style.color = "black";
    passError.textContent = "";

    if (confirmPassInput) {
        confirmPassInput.classList.remove("invalid");
        confirmPassError.textContent = "";
    }
}

// verifica se o campo esta vazio
export function emptyPass() {
    return passInput.value.trim() === "";
}


// verifica se o usuario digitou as confirmacao de senha corretamente
export function isEqualPass() {
    return passInput.value === confirmPassInput.value;
}

// exibe um alerta na senha diferente
export function diferentPass(menssage) {
    confirmPassInput.classList.add("invalid");
    confirmPassError.textContent = menssage;
}

export function passStrong() {
    const password = passInput.value;
    const specialChars = password.match(/[^a-zA-Z0-9]/g) || [];
    const uniqueChars = new Set(password).size;

    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const complexity = (hasUpper + hasLower + hasNumber) * 10;

    const strong = ((specialChars.length / password.length) * 30) + ((uniqueChars / password.length) * 40) + complexity;

    if (password.length < 8) {
        passAlert("invalid", "red", "Mínimo 8 dígitos!");
    } else if (strong < 40) {
        passAlert("weak", "yellow", "Senha fraca!");
    } else if (strong >= 40 && strong < 70) {
        passAlert("middle", "greenyellow", "Senha média!");
    } else {
        passAlert("strong", "green", "Senha forte!");
    }
}

// altera o botao e exibe ou oculta a senha
export function viewPassword(event) {
    const button = event.currentTarget;
    const container = button.closest(".input-container");
    const input = container.querySelector("input[type='password'], input[type='text']");

    input.type = input.type === "password" ? "text" : "password";

    const icon = button.querySelector("i");
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
}

// retira a cor vermelha ao digitar novamente
passInput.addEventListener("input", () => {
    if (passInput.value.trim() !== "") {
        passOk();
        passStrong();
    }
});

// retira o erro da confirmacao de senha se ela existir no DOM
if (confirmPassInput) {

    confirmPassInput.addEventListener("blur", () => {
        if (passInput.value.trim() === "" && confirmPassInput.value.trim() === "") {
            return;
        }
        if (!isEqualPass()) {
            diferentPass("Senhas divergentes!");
        }
    })

    confirmPassInput.addEventListener("input", () => {
        if (confirmPassInput.value.trim() !== "") {
            passOk();
        }
    });
}