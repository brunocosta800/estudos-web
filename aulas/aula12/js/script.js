alert('Com a nossa mensagem'); // alerta por popup, não retorna valor (undefined)
let confirma = confirm('Deseja continuar?'); // confirmação de resposta por popup, retorna true ou false
let num1 = prompt('Digite o seu nome'); // input de texto no popup, retorna uma string

num1 = parseFloat(num1); // converte para number

console.log(confirma);
console.log(num1);