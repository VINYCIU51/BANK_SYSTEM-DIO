import { Alert } from "../utils/alerts.js";

export class BirthDate {
    constructor() {
        this.input = document.getElementById("birth-date");
        this.error = document.getElementById("birth-error");

        // ativa o listener apenas se os campos existirem
        if (this.input && this.error) {
            this.setupListeners();
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

    // verifica se todos os espacos da data foram preenchidos
    isValidLength() {
        const date = this.input.value.replace(/[^\d]/g, "");
        return date.length === 8;
    }

    // formata a data e elimina caracteres inválidos
    formateDate() {
        let date = this.input.value.replace(/[^\d]/g, "");

        if (date.length <= 2) { // 00
            return this.input.value = date;
        }
        if (date.length <= 4) { // 00 / 00
            return this.input.value = `${date.slice(0, 2)} / ${date.slice(2, 4)} /`;
        }
        // completa o formato 00 / 00 / 0000
        this.input.value = `${date.slice(0, 2)} / ${date.slice(2, 4)} / ${date.slice(4, 8)}`;
    }

    // faz as verificacoes do campo
    validate() {
        if (this.isEmpty()) {
            this.alert("Campo obrigatório!");
            return false;
        }
        if (!this.isValidLength()) {
            this.alert("Digitos insuficientes!");
            return false;
        }
        return true;
    }

    // monitora a cada input
    setupListeners() {
        this.input.addEventListener("input", () => {
            this.formateDate();
        })
    }
}