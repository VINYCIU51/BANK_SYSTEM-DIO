import { Alert } from "../utils/alerts";

export class PhoneValidation {
   constructor() {
      this.input = document.getElementById("phone");
      this.error = document.getElementById("phone-error");

      // ativa os listeners se o campo existir
      if (this.input && this.error) {
         this.setupEventListener();
      }
   }

   isEmpty() {
      return this.input.value.trim() === "";
   }

   alert(type, color, message) {
      return Alert.show(this.input, this.error, { type, color, message });
   }

   // formata o numero telefonico e bloqueia letras no processo
   formatPhone() {
      let number = this.input.value.replace(/\D/g, "");

      if (number.length <= 2) {
         this.input.value = number;
      }
      else if (number.length <= 7) {
         this.input.value = `(${number.slice(0, 2)}) ${number.slice(2)}`;
      }
      else {
         this.input.value = `(${number.slice(0, 2)}) ${number.slice(2, 7)}-${number.slice(7, 11)}`;
      }

   }

   // monitora o campo de input a cada digito
   setupEventListener() {
      this.input.addEventListener("input", () => {
         this.formatPhone();
      });
   }
}