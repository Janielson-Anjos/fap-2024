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

document.getElementById('toggle').addEventListener('click', function() {
    const body = document.body;

    if (body.classList.contains('dark-mode')) {
        // Remove o modo escuro
        body.classList.remove('dark-mode');
        body.style.backgroundImage = ''; // Remove a imagem de fundo
    } else {
        // Ativa o modo escuro
        body.classList.add('dark-mode');
        body.style.backgroundImage = 'url(../imagem/imagecopy.png)'; // Adiciona a imagem de fundo
    }
});
