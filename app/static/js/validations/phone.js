import { Alert } from "../utils/alerts.js";

export class Phone {
   constructor() {
      this.input = document.getElementById("phone");
      this.error = document.getElementById("phone-error");

      // ativa os listeners se o campo existir
      if (this.input && this.error) {
         this.setupListeners();
      }
   }

   // verifica se o campo está vazio
   isEmpty() {
      return this.input.value.trim() === "";
   }

   //  verifica se foram digitados todos os digitos
   isValidLength() {
      let number = this.input.value.replace(/\D/g, "");
      return number.length === 11;
   }

   // formata o numero telefonico e bloqueia letras no processo
   formatPhone() {
      let number = this.input.value.replace(/\D/g, "");

      if (number.length <= 2) {
         return this.input.value = number;
      }
      if (number.length <= 7) {  // adiciona os parenteses
         return this.input.value = `(${number.slice(0, 2)}) ${number.slice(2)}`;
      }
      // formata em (00) 0000 - 0000
      this.input.value = `(${number.slice(0, 2)}) ${number.slice(2, 7)}-${number.slice(7, 11)}`;
   }

   // valida o campo
   validate() {
      if (this.isEmpty()) {
         Alert.show(this.input, this.error, { message: "Campo obrigatório!" });
         return false;
      }
      if (!this.isValidLength()) {
         Alert.show(this.input, this.error, { message: "Dígitos insuficientes!" });
         return false;
      }
      return true;
   }

   // monitora o campo de input a cada digito
   setupListeners() {
      this.input.addEventListener("input", () => {
         Alert.clear(this.input, this.error);
         this.formatPhone();
      });
   }
}