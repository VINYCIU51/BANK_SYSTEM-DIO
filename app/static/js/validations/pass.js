import { Alert } from "../utils/alerts.js";

export class Password {
    constructor() {
        this.input = document.getElementById("password");
        this.error = document.getElementById("password-error");

        // configura listeners se os elementos existirem
        if (this.input && this.error) {
            this.setupListeners();
        }
    }

    // verifica se o campo esta vazio
    isEmpty() {
        return this.input.value.trim() === "";
    }

    // verifica a força da senha
    calculeStrength() {
        const password = this.input.value;
        const specialChars = password.match(/[^a-zA-Z0-9]/g) || [];
        const uniqueChars = new Set(password).size;

        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const complexity = (hasUpper + hasLower + hasNumber) * 10;

        // força baseada em: 35% quant de char especial + 35% quant char unicos + 30% uso de numeros,maiusculas e minusculas
        const strength = ((specialChars.length / password.length) * 35) + ((uniqueChars / password.length) * 35) + complexity;

        if (password.length < 8) {
            Alert.show(this.input, this.error, { type: "invalid", color: "red", message: "Mínimo 8 dígitos!" });
        } else if (strength < 50) {
            Alert.show(this.input, this.error, { type: "weak", color: "yellow", message: "Senha fraca!" });
        } else if (strength >= 50 && strength < 70) {
            Alert.show(this.input, this.error, { type: "middle", color: "greenyellow", message: "Senha média!" });
        } else {
            Alert.show(this.input, this.error, { type: "strong", color: "green", message: "Senha forte!" });
        }
    }

    // valida o campo de senha
    validate() {
        if (this.isEmpty()) {
            Alert.show(this.input, this.error, { type: "invalid", color: "red", message: "Campo obrigatório!" });
            return false;
        }
        return true;
    }

    // Monitora cada digito no campo senha
    setupListeners() {
        this.input.addEventListener("input", () => {
            Alert.clear(this.input, this.error);
        });
    }
}