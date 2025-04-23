export const passInput = document.getElementById("password");
export const passError = document.getElementById("password-error");

export const confirmPassInput = document.getElementById("confirm-password");
export const confirmPassError = document.getElementById("confirm-password-error");

// verifica se o campo esta vazio
export function emptyPass() {
    return passInput.value.trim() === "";
}

// exibe um alerta na senha
export function invalidPass(menssage) {
    passInput.classList.add("invalid");
    passError.textContent = menssage;

    if (confirmPassInput) {
        confirmPassInput.classList.add("invalid");
        confirmPassError.textContent = menssage;
    }
}

// remove o alerta de erro da senha
export function passOk() {
    passInput.classList.remove("invalid");
    passError.textContent = "";

    if (confirmPassInput) {
        confirmPassInput.classList.remove("invalid");
        confirmPassError.textContent = "";
    }
}

// verifica se o usuario digitou as confirmacao de senha corretamente
export function isEqualPass() {
    return passInput.value === confirmPassInput.value;
}

// exibe um alerta na senha
export function diferentPass(menssage) {
    confirmPassInput.classList.add("invalid");
    passError.textContent = menssage;
}

// retira a cor vermelha ao digitar novamente
passInput.addEventListener("input", () => {
    if (passInput.value.trim() !== "") {
        passOk();
    }
});

confirmPassInput.addEventListener("input", () => {
    if (confirmPassInput.value.trim() !== "") {
        confirmPassInput.classList.remove("invalid");
    }
});
