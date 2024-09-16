function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (!altura || !peso) {
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
