const nome = prompt('Digite seu nome completo:')
const qtdeLetras = nome.length;
const primeiroIndice = nome.indexOf('a');
const ultimoIndice = nome.lastIndexOf('o');
const ultimasLetras = nome.slice(nome.length - 3, nome.length);

window.document.body.innerHTML = `Seu nome é: ${nome} <br/>`;
window.document.body.innerHTML += `Seu nome tem ${qtdeLetras} letras <br/>`;
window.document.body.innerHTML += `A segunda letra do seu nome é ${nome.charAt(1)} <br/>`;
window.document.body.innerHTML += `O primeiro índice da letra "a" é ${primeiroIndice} <br/>`;
window.document.body.innerHTML += `O último índice da letra "o" é ${ultimoIndice} <br/>`;
window.document.body.innerHTML += `As últimas 3 letras do seu nome são: ${ultimasLetras} <br/>`;
window.document.body.innerHTML += `As palavras do seu nome são: ${nome.slice(' ')} <br/>`;
window.document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br/>`;
window.document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br/>`;