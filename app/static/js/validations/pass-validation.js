export const passInput = document.getElementById("password");
export const passError = document.getElementById("password-error");

export const confirmPassInput = document.getElementById("confirm-password");
export const confirmPassError = document.getElementById("confirmPass-error");

export const toggleButton = document.querySelector(".view-password i");

// verifica se o campo esta vazio
export function emptyPass() {
    return passInput.value.trim() === "";
}

// exibe um alerta na senha
export function invalidPass(menssage) {
    passInput.classList.add("invalid");
    passError.textContent = menssage;
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

// exibe um alerta na senha diferente
export function diferentPass(menssage) {
    confirmPassInput.classList.add("invalid");
    confirmPassError.textContent = menssage;
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

export function viewPassword(event) {
    // 1. Pegar o botão clicado (usando currentTarget do evento)
    const button = event.currentTarget;

    // 2. Encontrar o container pai
    const container = button.closest(".input-container");

    // 3. Buscar o input dentro do container (usando querySelector)
    const input = container.querySelector("input[type='password'], input[type='text']");

    // 4. Alternar o tipo do input
    input.type = input.type === "password" ? "text" : "password";

    // 5. Alternar o ícone (buscando dentro do botão clicado)
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
        if (passInput.value.trim() !== "" && confirmPassInput.value.trim() !== "") {
            if (!isEqualPass()) {
                diferentPass("Senhas divergentes!");
            }
        }
    })

    confirmPassInput.addEventListener("input", () => {
        if (confirmPassInput.value.trim() !== "") {
            passOk();
        }
    });
}