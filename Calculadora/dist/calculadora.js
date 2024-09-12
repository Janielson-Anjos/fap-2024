"use strict";
// Variável que armazena o valor atual do visor da calculadora
let valorVisor = '';
function adicionarNumero(numero) {
    valorVisor += numero; // Adiciona o número ao valor atual do visor
    const visor = document.getElementById('visor'); // Obtém o campo do visor
    visor.value = valorVisor; // Atualiza o visor com o novo valor
}
function adicionarOperador(operador) {
    valorVisor += operador; // Adiciona o operador ao valor atual do visor
    const visor = document.getElementById('visor'); // Obtém o campo do visor
    visor.value = valorVisor; // Atualiza o visor com o novo valor
}
function calcular() {
    try {
        valorVisor = eval(valorVisor).toString(); // Avalia a expressão matemática e converte para string
        const visor = document.getElementById('visor'); // Obtém o campo do visor
        visor.value = valorVisor; // Exibe o resultado no visor
    }
    catch (e) {
        const visor = document.getElementById('visor');
        visor.value = 'Erro'; // Exibe "Erro" caso a expressão seja inválida
        valorVisor = ''; // Limpa o valorVisor
    }
}
function limparVisor() {
    valorVisor = ''; // Limpa o valor armazenado
    const visor = document.getElementById('visor'); // Obtém o campo do visor
    visor.value = ''; // Limpa o texto no visor
}


document.getElementById('toggle').addEventListener('click', function() {
    const body = document.body;
    if (body.style.backgroundImage) {
        body.style.backgroundImage = '';
    } else {
        body.style.backgroundImage = 'url(../imagem/foto-evento-iv-maratona-de-calculo-cct-unifor-800-getty-images.jpg)';
    }
});