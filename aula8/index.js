const nome = 'Bruno';
const sobrenome = 'Costa Dourado';
const idade = 21;
const peso = 79;
const altura = 1.68;

let imc = peso / (altura * altura);
let anoNascimento = 2025 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'de altura e seu IMC é de', imc);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);