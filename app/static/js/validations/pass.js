import { Alert } from "../utils/alerts.js";

export class Password {
    constructor() {
        this.input = document.getElementById("password");
        this.error = document.getElementById("password-error");

        // configura listeners se os elementos existirem
        if (this.input && this.error) {
            this.setupPassListeners();
        }
    }

    // exibe um alerta na senha
    alert(type, color, message) {
        Alert.show(this.input, this.error, { type, color, message });
    }

    // remove o alerta de erro da senha
    clearAlert() {
        Alert.clear(this.input, this.error);
    }

    // verifica se o campo esta vazio
    isEmpty() {
        return this.input.value.trim() === "";
    }

    // verifica a força da senha
    calculeStrong() {
        const password = this.input.value;
        const specialChars = password.match(/[^a-zA-Z0-9]/g) || [];
        const uniqueChars = new Set(password).size;

        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const complexity = (hasUpper + hasLower + hasNumber) * 10;

        // força baseada em: 35% quant de char especial + 35% quant char unicos + 30% uso de numeros,maiusculas e minusculas
        const strong = ((specialChars.length / password.length) * 35) + ((uniqueChars / password.length) * 35) + complexity;

        if (password.length < 8) {
            this.alert("invalid", "red", "Mínimo 8 dígitos!");
        } else if (strong < 50) {
            this.alert("weak", "yellow", "Senha fraca!");
        } else if (strong >= 50 && strong < 70) {
            this.alert("middle", "greenyellow", "Senha média!");
        } else {
            this.alert("strong", "green", "Senha forte!");
        }
    }

    validate() {
        if (this.isEmpty()) {
            this.alert("invalid", "red", "Campo obrigatório!");
            return false;
        }
        return true;
    }

    // Configura listeners para o campo de senha
    setupPassListeners() {
        // Monitora cada digito no campo senha
        this.input.addEventListener("input", () => {
            if (this.input.value.trim() === "") {
                return;
            }
            this.clearAlert();
        });
    }
}