let num1 = 10;
let num2 = 2.5;
let num3 = 10.765476457;

console.log(num1.toString() + num2); // não muda a variável num1
console.log(num1.toString(2)); // retorna o número em binário

console.log(typeof num1);

// Converte e altera a variável num1 para string
num1 = num1.toString();
console.log(typeof num1);

// Arredonda o número para 3 casas decimais
console.log(num3.toFixed(3));

// Retorna true ou false se o número for inteiro ou não
console.log(Number.isInteger(num1));

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // verifica se a variável é um número ou não