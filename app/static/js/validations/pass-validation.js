export class PasswordValidation {
    constructor() {
        this.input = document.getElementById("password");
        this.error = document.getElementById("password-error");
        this.confirmInput = document.getElementById("confirm-password");
        this.confirmError = document.getElementById("confirmPass-error");

        // Configura listeners se os elementos existirem
        if (this.input && this.error) {
            this.setupPassListeners();
        }
        if (this.confirmInput && this.confirmError) {
            this.setupConfirmPassListeners();
        }
    }

    // exibe um alerta na senha
    alert(type, color, menssage) {
        this.clearAlert(); // reseta alguma cor residual

        this.input.classList.add(type);
        this.error.style.color = color;
        this.error.textContent = menssage;
    }

    // remove o alerta de erro da senha
    clearAlert() {
        this.input.classList.remove("invalid", "weak", "strong");
        this.error.style.color = "black";
        this.error.textContent = "";
    }

    clearConfirmAlert() {
        this.confirmInput.classList.remove("invalid");
        this.confirmError.textContent = "";
    }

    // verifica se o campo esta vazio
    isEmpty() {
        return this.input.value.trim() === "";
    }

    // verifica se o usuario digitou as confirmacao de senha corretamente
    confirmed() {
        return this.input.value === this.confirmInput.value;
    }

    // exibe um alerta na senha diferente
    confirmAlert(menssage) {
        this.confirmInput.classList.add("invalid");
        this.confirmError.textContent = menssage;
    }

    // verifica a força da senha
    strong() {
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

    // altera o botao e exibe ou oculta a senha
    viewPassword(event) {
        const button = event.currentTarget;
        const container = button.closest(".input-container");
        const input = container.querySelector("input[type='password'], input[type='text']");

        input.type = input.type === "password" ? "text" : "password";

        const icon = button.querySelector("i");
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
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

    // Configura listeners para o campo de confirmação de senha
    setupConfirmPassListeners() {
        // monitora o campo de confirmacao de senha
        this.confirmInput.addEventListener("blur", () => {
            if (this.input.value.trim() === "" && this.confirmInput.value.trim() === "") {
                return;
            }

            if (!this.confirmed()) {
                this.confirmAlert("Senhas divergentes!");
            }
        });

        this.confirmInput.addEventListener("input", () => {
            if (this.confirmInput.value.trim() === "") {
                return;
            }
            this.clearConfirmAlert();
        });
    }
}