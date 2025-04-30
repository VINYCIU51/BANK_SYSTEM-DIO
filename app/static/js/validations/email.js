import { Alert } from "../utils/alerts.js";

export class Email {
    constructor() {
        this.input = document.getElementById("email");
        this.error = document.getElementById("email-error");

        // configura listeners se os elementos existirem
        if (this.input && this.error) {
            this.setupListeners();
        }
    }

    // verifica se o campo está vazio
    isEmpty() {
        return this.input.value.trim() === "";
    }

    // verifica se o email é válido
    isValid() {
        const format = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return format.test(this.input.value);
    }

    // faz as validacoes do campo
    validate() {
        if (this.isEmpty()) {
            Alert.show(this.input, this.error, { message: "Campo obrigatório!" });
            return false;
        }
        if (!this.isValid()) {
            Alert.show(this.input, this.error, { message: "formato inválido!" });

            setTimeout(() => {
                Alert.show(this.input, this.error, { message: "Use exemplo@dominio.com" });
            }, 2300);

            return false;
        }
        return true;
    }

    // Monitora cada digito no campo
    setupListeners() {
        this.input.addEventListener("input", () => {
            Alert.clear(this.input, this.error);
        });
    }
}