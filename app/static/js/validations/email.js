import { Alert } from "../utils/alerts.js";

export class Email {
    constructor() {
        this.input = document.getElementById("email");
        this.error = document.getElementById("email-error");

        // configura listeners se os elementos existirem
        if (this.input && this.error) {
            this.setupEventListeners();
        }
    }

    // exibe um alerta no email
    alert(message) {
        Alert.show(this.input, this.error, { message });
    }

    // remove o alerta de erro do email
    clearAlert() {
        Alert.clear(this.input, this.error);
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
            this.alert("Campo obrigatório!");
            return false;
        }
        if (!this.isValid()) {
            this.alert("Formato inválido!");
            return false;
        }
        return true;
    }

    // Monitora cada digito no campo
    setupEventListeners() {
        this.input.addEventListener("input", () => {
            this.clearAlert()
        });
    }
}