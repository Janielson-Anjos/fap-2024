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
        this.id = cpf;
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

function bemvindo(cpf){
    for(const u of usuarios){
        if (u.cpf == cpf){
            console.log(`========= Bem vindo ${u.nome} ===========`);
        }
    };
}
bemvindo(cpf);
// console.clear();
// let rodar = true;

// while (rodar) {
//   console.log(`========= `);

// }
