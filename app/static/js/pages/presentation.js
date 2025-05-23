const colunas = document.querySelectorAll('.col');
const grafico = document.querySelector('.graphic'); // ou document.getElementById('graphic') se adicionar o ID

function verificarScroll() {
    const rect = grafico.getBoundingClientRect();
    const dentroDaTela = rect.top < window.innerHeight && rect.bottom > 0;

    colunas.forEach(coluna => {
        if (dentroDaTela) {
            coluna.classList.add('ativa');
        } else {
            coluna.classList.remove('ativa');
        }
    });
}

window.addEventListener('scroll', verificarScroll);
window.addEventListener('load', verificarScroll);