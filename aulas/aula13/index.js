//               01234567
let umaString = "O rato roeu a roupa do rei de Roma.";

// Acessar um elemento em uma string
console.log(umaString[1]);
console.log(umaString.charAt(1));

// Concatenação de string
console.log(umaString.concat(' em ', 'um ', 'lindo dia.'))
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

// Resgatar o index de uma sequência
console.log(umaString.indexOf('U'));
console.log(umaString.indexOf('U', 3)); // inicia no índice 3 da string

console.log(umaString.indexOf('t')); // procura do início da string
console.log(umaString.lastIndexOf('t')); // procura do final da string

// Métodos que utilizam RegEX (regular expression)
console.log(umaString.match(/[a-z]/g)); // procura todas as ocorrências do RegEX
console.log(umaString.search(/[a-z]/g)); // retorna a primeira ocorrência do RegEX
console.log(umaString.replace('Um', 'Outra')); // substitui a primeira ocorrência do texto
console.log(umaString.replace(/Um/g, 'Outra')); // substitui todas as ocorrências do texto

// Outras Funções
console.log(umaString.length); // retorna o tamanho da string

console.log(umaString.slice(2, 5)); // retorna uma substring
console.log(umaString.slice(-2)); // retorna uma substring, pegando os últimos 2 elementos dela

console.log(umaString.split('r')); // divide a string baseada na ocorrência
console.log(umaString.split('r', 2)); // divide a string baseada na ocorrência, limitado a 2 vezes

console.log(umaString.toUpperCase()); // trasnforma a string inteira pra maiúsculo
console.log(umaString.toLowerCase()); // trasnforma a string inteira pra minúsculo