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

    // verifica se o campo está vazio
    isEmpty() {
        return this.input.value.trim() === "";
    }

    // verifica se todos os espacos da data foram preenchidos
    isValidLength() {
        const date = this.input.value.replace(/[^\d]/g, "");
        return date.length === 8;
    }

    // Nome mais claro e semanticamente correto
    getUserAge() {
        const [day, month, year] = this.input.value.trim().split('/').map(Number);
        const currentYear = new Date().getFullYear();

        if (year > currentYear) {
            return null;
        }

        return currentYear - year;
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
        if (this.isEmpty()) { // valida a entrada no campo
            Alert.show(this.input, this.error, { message: "Campo obrigatório!" });
            return false;
        }
        if (!this.isValidLength()) {  // valida a quant de digitos
            Alert.show(this.input, this.error, { message: "Digitos insuficientes!" });
            return false;
        }
        if (this.getUserAge() > 120 || this.getUserAge() === null) { // verifica se o ano digitado é valido
            Alert.show(this.input, this.error, { message: "idade inválida!" });
            return false;
        }
        if (this.getUserAge() < 18) { // valida a maioridade do usuario
            Alert.show(this.input, this.error, { message: "Idade insuficiente!" });
            return false;
        }
        return true;
    }

    // monitora a cada input
    setupListeners() {
        this.input.addEventListener("input", () => {
            Alert.clear(this.input, this.error);
            this.formateDate();
        })
    }
}