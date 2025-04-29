import { Alert } from "../utils/alerts.js";
import { Password } from "./pass.js";

const pass = new Password();

export class ConfirmPassword {
    constructor() {
        this.input = document.getElementById("confirm-password");
        this.error = document.getElementById("confirmPass-error");

        //  configura listeners se os elementos existirem
        if (this.input && this.error) {
            this.setupListeners();
        }
    }

    // remove o alerta no campo de confirmacao
    clearAlert() {
        Alert.clear(this.input, this.error);
    }

    // exibe um alerta na senha diferente
    alert(message) {
        Alert.show(this.input, this.error, { message });
    }

    // verifica se o campo esta vazio
    isEmpty() {
        return this.input.value.trim() === "";
    }

    // verifica se o usuario digitou as confirmacao de senha corretamente
    confirmed() {
        return this.input.value === pass.input.value;
    }

    // faz as validacoes necessarias no campo
    validate() {
        if (this.isEmpty()) {
            this.alert("Campo obrigatório!");
            return false;
        }

        if (!this.confirmed()) {
            this.alert("Senhas divergentes!");
            return false;
        }
        return true;
    }

    // Monitora cada digito no campo
    setupListeners() {
        this.input.addEventListener("input", () => {
            this.clearAlert();
        });
    }
}