const numero = prompt('Insira um número:');
const numeroTitulo = document.getElementById("numero-titulo");
numeroTitulo.innerText(numero);

parseInt(numero);

console.log(`Raiz quadrada: ${Math.sqrt(numero)}`);
console.log(`Raiz quadrada: ${Number.isInteger(numero)}`);
console.log(`Raiz quadrada: ${Number.isNaN(numero)}`);
console.log(`Raiz quadrada: ${Math.floor(numero)}`);
console.log(`Raiz quadrada: ${Math.ceil(numero)}`);
console.log(`Raiz quadrada: ${numero.toFixed(2)}`);
