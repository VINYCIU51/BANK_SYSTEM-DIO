export const passInput = document.getElementById("password");
export const passError = document.getElementById("password-error");

// verifica se o campo esta vazio
export function emptyPass() {
    return passInput.value.trim() === "";
}

// retira a cor vermelha ao digitar novamente
passInput.addEventListener("input", () => {
    if (passInput.value.trim() !== "") {
        passInput.classList.remove("invalid");
        passError.textContent = "";
    }
});
