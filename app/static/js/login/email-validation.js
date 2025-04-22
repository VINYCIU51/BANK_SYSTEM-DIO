export const emailInput = document.getElementById("email");
export const emailError = document.getElementById("email-error");

// Função que verifica se o email é válido
export function validEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(emailInput.value);
}

// Função que verifica se o campo está vazio
export function emptyEmail() {
    return emailInput.value.trim() === "";
}

// retira a cor vermelha ao digitar novamente
emailInput.addEventListener("input", () => {
    if (emailInput.value.trim() !== "") {
        emailInput.classList.remove("invalid");
        emailError.textContent = "";
    }
});

// Validação quando o campo perde o foco (blur)
emailInput.addEventListener("blur", (e) => {
    const email = e.target.value;

    // evita que haja luz de erro so de passar pelo campo
    if (email !== "") {
        if (!validEmail()) {
            emailError.textContent = "Formato inválido!";
            emailInput.classList.add("invalid");

        } else {
            emailError.textContent = "";
            emailInput.classList.remove("invalid");
        }
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("invalid");
    }

});
