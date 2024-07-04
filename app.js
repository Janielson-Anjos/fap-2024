const readline = require("readline-sync");

// let num1 = parseInt(readline.question('digite o primeiro numero: '));
// let num2 = parseInt(readline.question('digite o segundo numero: '));
// let num3 = parseInt(readline.question(`digite o terceiro numero: `));

// if (num1 > num2 && num1 > num3){
//     console.log('o primeiro numero é maior!');
// }else if ( num2 > num3){
//     console.log('O segundo numero é maior!');
// } else{
//     console.log('O terceiro numero é maior!');
// }

// if (num1 < num2 && num1 < num3){
//     console.log('o primeiro numero é menor!');
// }else if ( num2 < num3){
//     console.log('o segundo numero é menor!');
// } else{
//     console.log('o terceiro numero é menor!');
// }

// let media = (num1 + num2 + num3) / 3;

// console.log(`A media dos 3 numeros é ${media}`);

class Usuario {
    constructor(cpf, nome, saldo) {
        this.cpf = cpf;
        this.nome = nome;
        this.saldo = saldo;
    }
}

const usuario1 = new Usuario("123", "Jose Maria", 50.00);
const usuario2 = new Usuario("444", "Maria Jose", 100.00);


const usuarios = [usuario1, usuario2];


console.log("========================================");
let cpf = readline.question("Digite seu cpf: ");
console.log("========================================");

let saldoUsuario;


let rodar = false;
bemvindo(cpf);


while (rodar) {
  console.log(`=========== Qual operação deseja realizar? ===========`);
  console.log(`================= 1. Consultar saldo =================`);
  console.log(`================= 2. Sacar saldo =====================`);
  console.log(`================= 3. Transferencia ===================`);
  console.log(`================= 4. Sair ============================`);

  let escolha = parseInt(readline.question("Digite o número da operação: "));

  switch(escolha){
    case 1:
        consultaSaldo(cpf);
        // console.log(saldoUsuario);
        readline.keyInPause();
        break;
  }
}

function bemvindo(cpfU){
    for(const u of usuarios){
        if (u.cpf == cpfU){
            console.log(`============= Bem vindo ${u.nome} ===============`);
            saldoUsuario = u.saldo;
            rodar = true;
        } else{
            console.log('Usuario não encontrado!');
        }
    };
}

function consultaSaldo(cpfU){
    for(const u of usuarios){
        if (u.cpf == cpfU){
            console.log(`============= Seu saldo é de R$${u.saldo} ===============`);
        
        }
    };
}

