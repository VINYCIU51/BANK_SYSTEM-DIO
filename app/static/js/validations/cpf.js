import { Alert } from "../utils/alerts.js";

export class Cpf {
    constructor() {
        this.input = document.getElementById("cpf");
        this.error = document.getElementById("cpf-error");

        // verifica se o campo existe para adicionar os listeners
        if (this.input && this.error) {
            this.setupListeners();
        }
    }

    // verifica se o campo está vazio
    isEmpty() {
        return this.input.value.trim() === "";
    }

    // valida o tamanho do input
    isValidLength() {
        let cpf = this.input.value.replace(/\D/g, "");
        return cpf.length === 11;
    }

    // formata em 000.000.000-00 e evita inputs de letras
    formatCpf() {
        let number = this.input.value.replace(/\D/g, "");

        if (number.length <= 3) { // 000
            return this.input.value = number;
        }
        if (number.length <= 6) { //000.000
            return this.input.value = `${number.slice(0, 3)}.${number.slice(3, 6)}`;
        }
        if (number.length <= 9) { // 000.000.000
            return this.input.value = `${number.slice(0, 3)}.${number.slice(3, 6)}.${number.slice(6, 9)}`;
        }
        // completa o formato 000.000.000-00
        this.input.value = `${number.slice(0, 3)}.${number.slice(3, 6)}.${number.slice(6, 9)}-${number.slice(9, 11)}`;
    }

    // faz as verificacoes do campo
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

    // monitora o campo a cada input
    setupListeners() {
        this.input.addEventListener("input", () => {
            Alert.clear(this.input, this.error);
            this.formatCpf();
        })
    }
}