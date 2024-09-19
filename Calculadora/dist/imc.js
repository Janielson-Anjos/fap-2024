// function calcularIMC() {
//     const altura = parseFloat(document.getElementById('altura').value);
//     const peso = parseFloat(document.getElementById('peso').value);

//     if (!altura || !peso) {
//         document.getElementById('resultado').textContent = 'Por favor, insira valores válidos.';
//         return;
//     }

//     const imc = (peso / (altura * altura)).toFixed(2);

//     let classificacao = '';

//     if (imc < 18.5) {
//         classificacao = 'Abaixo do peso';
//     } else if (imc >= 18.5 && imc < 24.9) {
//         classificacao = 'Peso normal';
//     } else if (imc >= 25 && imc < 29.9) {
//         classificacao = 'Sobrepeso';
//     } else {
//         classificacao = 'Obesidade';
//     }

//     document.getElementById('resultado').textContent = `Seu IMC é ${imc} (${classificacao}).`;
// }


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


function validarValor(valor, tipo) {
    // Expressão regular para validar números decimais (ex: 1.86 para altura ou 100.5 para peso)
    const regex = tipo === 'altura' ? /^[0-9]*\.[0-9]{1,2}$|^[0-9]+$/ : /^[0-9]*\.[0-9]+$|^[0-9]+$/;
    return regex.test(valor);
}

function calcularIMC() {
    const alturaInput = document.getElementById('altura').value;
    const pesoInput = document.getElementById('peso').value;

    // Valida os valores de altura e peso
    if (!validarValor(alturaInput, 'altura') || !validarValor(pesoInput, 'peso')) {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos no formato correto (altura: 1.86 ou 1.55, peso: 100 ou 105.6).';
        return;
    }

    const altura = parseFloat(alturaInput);
    const peso = parseFloat(pesoInput);

    // Verifica se os valores são positivos e não-zero
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById('resultado').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    document.getElementById('resultado').textContent = `Seu IMC é ${imc} (${classificacao}).`;
}

// Adiciona um listener para o botão que chama a função calcularIMC
document.getElementById('calcular').addEventListener('click', calcularIMC);

const currentPage = window.location.pathname.split("/").pop();

  // Seleciona todos os itens do navbar
  const navItems = document.querySelectorAll('nav li');

  // Adiciona a classe 'active' ao item correspondente
  navItems.forEach(item => {
    if (item.querySelector('a').getAttribute('href') === currentPage) {
      item.classList.add('active');
    }
  });