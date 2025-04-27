export class ViewPassword {

    // altera o botao e exibe ou oculta a senha
    static view(event) {
        const button = event.currentTarget;
        const container = button.closest(".input-container");
        const input = container.querySelector("input[type='password'], input[type='text']");

        input.type = input.type === "password" ? "text" : "password";

        const icon = button.querySelector("i");
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    }
}