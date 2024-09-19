function calcularCombustivel() {
    const gasolina = parseFloat(document.getElementById('gasolina').value);
    const etanol = parseFloat(document.getElementById('etanol').value);

    if (!gasolina || !etanol) {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const proporcao = (etanol / gasolina).toFixed(2);

    let recomendacao = '';

    if (proporcao <= 0.7) {
        recomendacao = 'Etanol é a melhor escolha.';
    } else {
        recomendacao = 'Gasolina é a melhor escolha.';
    }

    document.getElementById('resultado').textContent = `Proporção: ${proporcao}. ${recomendacao}`;
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
    body.style.backgroundImage = 'url(../imagem/imagecopy.png)';
}

// Função para remover o modo escuro
function removerModoEscuro() {
    const body = document.body; 
    body.classList.remove('dark-mode');
    body.style.backgroundImage = '';
}

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