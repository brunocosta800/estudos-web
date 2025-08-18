/*
    Primitivos (imutáveis) - string, numer, undefined, boolean, null (bigint, symbol) -> valores copiados

    Referência (mutável) - array, object, function
*/

let x = 23;
let y = x; // Copia o valor
console.log(x, y);

x = 90; // x agora aponta para outro endereço de memória
console.log(x, y); // Variáveis de referência apontam para o valor


let a = [1, 2, 3];
let b = a; // b e a estão apontando para o mesmo endereço de memória
console.log(a, b);

a.push(4); // Eu mutei o dado, isto é, ele continua apontando pro mesmo endereço de memória

a = [5, 6]; // Eu reatribui, isto é, está apontando pra espaços diferentes de memória

console.log(a, b); // Variáveis de referência apontam para a memória

let c = [1, 2, 3];
let d = [...c]; // Nesse caso, estou fazendo uma cópia, assim como com dados primitivos, fazendo um spread
console.log(c, d);

c.push(4);

console.log(c, d);


