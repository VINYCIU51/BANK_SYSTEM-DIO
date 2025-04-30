export class Alert {

    // exibe um erro no campo especificado
    static show(element, elementError, options = {}) {
        const { type = 'invalid', color = "red", message = '' } = options;

        element.classList.remove('invalid', 'weak', 'strong', 'middle');

        element.classList.add(type);
        elementError.style.color = color;
        elementError.textContent = message;
    }

    // limpa as notificacoes de erro
    static clear(element, elementError) {
        element.classList.remove('invalid', 'weak', 'strong', 'middle');
        elementError.style.color = '';
        elementError.textContent = '';
    }
}