import { Alert } from "../utils/alerts.js";

export class ConfirmPassValidation {
    constructor() {
        this.password = document.getElementById("password");
        this.input = document.getElementById("confirm-password");
        this.error = document.getElementById("confirmPass-error");

        //  configura listeners se os elementos existirem
        if (this.input && this.error) {
            this.setupConfirmPassListeners();
        }
    }

    // remove o alerta no campo de confirmacao
    clearAlert() {
        Alert.clear(this.input, this.error);
    }

    // exibe um alerta na senha diferente
    alert(message) {
        Alert.show(this.input, this.error, { type: "invalid", color: "red", message });
    }

    // verifica se o usuario digitou as confirmacao de senha corretamente
    confirmed() {
        return this.input.value === this.password.value;
    }

    // Configura listeners para o campo de confirmação de senha
    setupConfirmPassListeners() {
        // Validação quando o campo perde o foco (blur)
        this.input.addEventListener("blur", () => {
            if (this.input.value.trim() === "" && this.password.value.trim() === "") {
                return;
            }

            if (!this.confirmed()) {
                this.alert("Senhas divergentes!");
            }

            this.clearAlert();
        });

        this.input.addEventListener("input", () => {
            if (this.input.value.trim() === "") {
                return;
            }
            this.clearAlert();
        });
    }
}