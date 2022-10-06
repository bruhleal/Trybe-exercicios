
function verificaNumero(numeroApostado, sorteio) {
    let frase = 0;
    if (numeroApostado === sorteio) {
        frase = 'Parabéns voce ganhou';    
    } else {
        frase = 'Tente novamente';
    }
    return frase;
}

const resultadoLoteria = (numeroApostado, callback) => {
    const sorteio = Math.floor(Math.random() * 5 + 1);

    const ojb = {
        numeroJogador: numeroApostado,
        numeroSorteado: sorteio,
        situacaoDoJogador: callback(numeroApostado, sorteio),
    }
    return ojb;
}

console.log(resultadoLoteria(3, verificaNumero));

