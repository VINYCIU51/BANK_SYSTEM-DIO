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
            Alert.show(this.input, this.error, { message: "Campo obrigatório!" });
            return false;
        }
        return true;
    }

    // monitora a cada input
    setupListeners() {
        this.input.addEventListener("input", () => {
            Alert.clear(this.input, this.error);
            this.validCharacter();
        })

        // puramente preguiça de criar um arquivo apenas para o campo de nome materno
        if (this.motherName) {
            this.motherName.addEventListener("input", () => {
                Alert.clear(this.motherName, this.error);
                this.validCharacter();
            })
        }
    }
}