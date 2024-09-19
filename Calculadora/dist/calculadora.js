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


// document.getElementById('toggle').addEventListener('click', function() {
//     const body = document.body;
//     if (body.style.backgroundImage) {
//         body.style.backgroundImage = '';
//     } else {
//         body.style.backgroundImage = 'url(../imagem/foto-evento-iv-maratona-de-calculo-cct-unifor-800-getty-images.jpg)';
//     }
// });

// Função para aplicar o modo escuro
function aplicarModoEscuro() {
    const body = document.body;
    body.classList.add('dark-mode');
    body.style.backgroundImage = 'url(../imagem/imagecopy.png)'; // Adiciona a imagem de fundo
}

// Função para remover o modo escuro
function removerModoEscuro() {
    const body = document.body;
    body.classList.remove('dark-mode');
    body.style.backgroundImage = ''; // Remove a imagem de fundo
}

// Função para alternar o modo escuro e armazenar a preferência
function alternarModoEscuro() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        removerModoEscuro();
        localStorage.setItem('modoEscuro', 'false');
    } else {
        aplicarModoEscuro();
        localStorage.setItem('modoEscuro', 'true');
    }
}

// Verifica e aplica a preferência do modo escuro ao carregar a página
function carregarPreferenciaModoEscuro() {
    const modoEscuro = localStorage.getItem('modoEscuro');
    if (modoEscuro === 'true') {
        aplicarModoEscuro();
    } else {
        removerModoEscuro();
    }
}

// Inicializa a preferência do modo escuro ao carregar a página
document.addEventListener('DOMContentLoaded', carregarPreferenciaModoEscuro);

// Adiciona o evento de clique ao botão de alternar modo escuro
document.getElementById('toggle').addEventListener('click', alternarModoEscuro);

const currentPage = window.location.pathname.split("/").pop();

  // Seleciona todos os itens do navbar
  const navItems = document.querySelectorAll('nav li');

  // Adiciona a classe 'active' ao item correspondente
  navItems.forEach(item => {
    if (item.querySelector('a').getAttribute('href') === currentPage) {
      item.classList.add('active');
    }
  });