import { Alert } from "../utils/alerts.js"

export class PostalCode {
    constructor() {
        this.input = document.getElementById("cep");
        this.error = document.getElementById("cep-error");

        // configura listeners se os elementos existirem
        if (this.input && this.error) {
            this.setupListeners();
        }
    }

    // verifica se o campo está vazio
    isEmpty() {
        return this.input.value.trim() === "";
    }

    // valida a quantde digitos
    isValidLength() {
        const cep = this.input.value.replace(/\D/g, "");
        return cep.length === 8;
    }

    // evita inputs nao numeridos e formata em 00000-000
    formatCep() {
        let cep = this.input.value.replace(/\D/g, "");

        if (cep.length <= 5) {
            return this.input.value = cep;
        }
        this.input.value = `${cep.slice(0, 5)} - ${cep.slice(5, 8)}`;
    }

    // faz as validacoes do campo
    validate() {
        if (this.isEmpty()) {
            Alert.show(this.input, this.error, { message: "Campo obrigatório!" });
            return false;
        }
        if (!this.isValidLength()) {
            Alert.show(this.input, this.error, { message: "Digitos insuficientes!" });
            return false;
        }
        return true;
    }

    // monitora a cada digito
    setupListeners() {
        this.input.addEventListener("input", () => {
            Alert.clear(this.input, this.error);
            this.formatCep();
        })
    }
}