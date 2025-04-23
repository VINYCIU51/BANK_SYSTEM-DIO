export const emailInput = document.getElementById("email");
export const emailError = document.getElementById("email-error");

// Função que verifica se o email é válido
export function isValidEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailInput.value);
}

// Função que verifica se o campo está vazio
export function emptyEmail() {
    return emailInput.value.trim() === "";
}

// exibe um alerta no email
export function invalidEmail(menssage) {
    emailInput.classList.add("invalid");
    emailError.textContent = menssage;
}

//  remove o alerta de erro do email
export function EmailOk() {
    emailInput.classList.remove("invalid");
    emailError.textContent = "";
}

// retira a cor vermelha ao digitar novamente
emailInput.addEventListener("input", () => {
    if (emailInput.value.trim() !== "") {
        EmailOk();
    }
});

// Validação quando o campo perde o foco (blur)
emailInput.addEventListener("blur", (e) => {
    const email = e.target.value;

    // evita que haja luz de erro so de passar pelo campo
    if (email !== "") {
        if (!isValidEmail()) {
            invalidEmail("Formato inválido!");
        } else {
            EmailOk();
        }
    } else {
        EmailOk();
    }

});
