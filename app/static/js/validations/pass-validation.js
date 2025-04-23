export const passInput = document.getElementById("password");
export const passError = document.getElementById("password-error");
export const confirmPassInput = document.getElementById("confirm-password");
export const toggleButton = document.querySelector(".view-password i");

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
    }
}

// remove o alerta de erro da senha
export function passOk() {
    passInput.classList.remove("invalid");
    passError.textContent = "";

    if (confirmPassInput) {
        confirmPassInput.classList.remove("invalid");
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

export function passStrong() {
    const password = passInput.value;
    const caracteres = /[^a-zA-Z0-9]/;

    if (password.length >= 8 && !caracteres.test(password)) {
        passInput.classList.add("weak");
        passError.textContent = "Senha media!";
        passError.style.color = "yellow";

    } else if (password.length >= 8 && caracteres.test(password)) {
        passInput.classList.add("strong");
        passError.textContent = "Senha forte!";
        passError.style.color = "green";
    }
}

export function viewPassword() {
    if (!passInput) return;
    passInput.type = passInput.type === "password" ? "text" : "password";

    if (toggleButton) {
        toggleButton.classList.toggle("fa-eye");
        toggleButton.classList.toggle("fa-eye-slash");
    }

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
    confirmPassInput.addEventListener("input", () => {
        if (confirmPassInput.value.trim() !== "") {
            passOk();
        }
    });
}