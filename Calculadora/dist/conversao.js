function converter() {
    const operacao = document.querySelector('input[name="operacao"]:checked').value;
    const cotacao = parseFloat(document.getElementById('cotacao').value);
    const valor = parseFloat(document.getElementById('valor').value);

    if (!cotacao || !valor) {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    let resultado = 0;

    if (operacao === 'dolarParaReal') {
        resultado = (valor * cotacao).toFixed(2);
        document.getElementById('resultado').textContent = `Valor em reais: R$${resultado}`;
    } else if (operacao === 'realParaDolar') {
        resultado = (valor / cotacao).toFixed(2);
        document.getElementById('resultado').textContent = `Valor em dólares: $${resultado}`;
    }
}

// document.getElementById('toggle').addEventListener('click', function() {
//     const body = document.body;

//     if (body.classList.contains('dark-mode')) {
//         // Remove o modo escuro
//         body.classList.remove('dark-mode');
//         body.style.backgroundImage = ''; // Remove a imagem de fundo
//     } else {
//         // Ativa o modo escuro
//         body.classList.add('dark-mode');
//         body.style.backgroundImage = 'url(../imagem/imagecopy.png)'; // Adiciona a imagem de fundo
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