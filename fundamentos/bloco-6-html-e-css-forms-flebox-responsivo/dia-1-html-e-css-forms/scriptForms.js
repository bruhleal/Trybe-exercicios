function eventoPadrao(event) {
    event.preventDefault();
}

window.onload = function () {
    const botaoSubmit = document.querySelector('#caixa-botao');
    botaoSubmit.addEventListener('click', eventoPadrao);
}

function limparInfos() {
    const elementos = document.querySelectorAll('input');
    const textoA = document.querySelector('textarea');

    for( let index = 0; index < elementos.length; index += 1) {
        const usuario = elementos[index];
        usuario.value = '';
        usuario.checked = false;
    }
    textoA.value = '';
}

window.onload = function () {
    const clear = document.querySelector('#limpar');
    clear.addEventListener('click', limparInfos);
    const submitB = document.querySelector('#caixa-botao');
    submitB.addEventListener('click', eventoPadrao);
}