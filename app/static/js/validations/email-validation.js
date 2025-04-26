export class EmailValidation {
    constructor() {
        this.input = document.getElementById("email");
        this.error = document.getElementById("email-error");

        // Verifica se os elementos existem antes de adicionar listeners
        if (this.input && this.error) {
            this.setupEventListeners();
        }
    }

    // verifica se o email é válido
    isValid() {
        const format = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return format.test(this.input.value);
    }

    // verifica se o campo está vazio
    isEmpty() {
        return this.input.value.trim() === "";
    }

    // exibe um alerta no email
    alert(menssage) {
        this.input.classList.add("invalid");
        this.error.textContent = menssage;
    }

    // remove o alerta de erro do email
    clearAlert() {
        this.input.classList.remove("invalid");
        this.error.textContent = "";
    }

    // Configura os event listeners
    setupEventListeners() {
        // retira a cor vermelha ao digitar novamente
        this.input.addEventListener("input", () => {
            if (this.input.value.trim() !== "") {
                this.clearAlert();
            }
        });

        // Validação quando o campo perde o foco (blur)
        this.input.addEventListener("blur", (e) => {
            const email = e.target.value;

            // evita que haja luz de erro só de passar pelo campo
            if (email === "") {
                return this.clearAlert();
            }
            if (!this.isValid()) {
                return this.alert("Formato inválido!");
            }
            this.clearAlert();
        });
    }
}