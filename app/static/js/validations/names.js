import { Alert } from "../utils/alerts.js";

export class Names {
    constructor() {
        this.input = document.getElementById("name");
        this.error = document.getElementById("name-error");

        // puramente preguiça de criar um arquivo apenas para o campo de nome materno
        this.motherName = document.getElementById("mother-name");

        // ativa o listener apenas se os campos existirem
        if (this.input && this.error) {
            this.setupListeners();
        }
    }

    // exibe um alerta no campo
    alert(message) {
        Alert.show(this.input, this.error, { message });
    }

    // remove o alerta de erro do campo
    clearAlert() {
        Alert.clear(this.input, this.error);
    }

    // verifica se o campo está vazio
    isEmpty() {
        return this.input.value.trim() === "";
    }

    // elimina caracteres invalidos (numericos e especiais)
    validCharacter() {
        let name = this.input.value.replace(/[^a-zA-Z\s]/g, "");
        this.input.value = name;

        // puramente preguiça de criar um arquivo apenas para o campo de nome materno
        if (this.motherName) {
            let mother = this.motherName.value.replace(/[^a-zA-Z\s]/g, "");
            this.motherName.value = mother;
        }
    }

    // faz as verificacoes do campo
    validate() {
        if (this.isEmpty()) {
            this.alert("Campo obrigatório!");
            return false;
        }
        return true;
    }

    // monitora a cada input
    setupListeners() {
        this.input.addEventListener("input", () => {
            this.clearAlert();
            this.validCharacter();
        })

        // puramente preguiça de criar um arquivo apenas para o campo de nome materno
        if (this.motherName) {
            this.motherName.addEventListener("input", () => {
                this.clearAlert();
                this.validCharacter();
            })
        }
    }
}