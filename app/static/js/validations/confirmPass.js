export class ConfirmPassValidation {
    constructor() {
        this.password = document.getElementById("password");
        this.input = document.getElementById("confirm-password");
        this.error = document.getElementById("confirmPass-error");

        if (this.input && this.error) {
            this.setupConfirmPassListeners();
        }
    }

    // remove o alerta no campo de confirmacao
    clearAlert() {
        this.input.classList.remove("invalid");
        this.error.textContent = "";
    }

    // verifica se o usuario digitou as confirmacao de senha corretamente
    confirmed() {
        return this.input.value === this.password.value;
    }

    // exibe um alerta na senha diferente
    alert(menssage) {
        this.input.classList.add("invalid");
        this.error.textContent = menssage;
    }

    // Configura listeners para o campo de confirmação de senha
    setupConfirmPassListeners() {
        // monitora o campo de confirmacao de senha
        this.input.addEventListener("blur", () => {
            if (this.input.value.trim() === "" && this.password.value.trim() === "") {
                return;
            }

            if (!this.confirmed()) {
                this.alert("Senhas divergentes!");
            }
        });

        this.input.addEventListener("input", () => {
            if (this.input.value.trim() === "") {
                return;
            }
            this.clearAlert();
        });
    }
}