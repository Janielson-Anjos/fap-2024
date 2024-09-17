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