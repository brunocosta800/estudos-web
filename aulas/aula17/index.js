function soma(x, y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,2));
console.log(soma(5,1));
console.log(soma(10,2));

const raiz = function (n){ // função anônima
    return Math.sqrt(n);
};

console.log(raiz(9));
console.log(raiz(81));

const potencia = (n) => { // arrow function
    return Math.pow(n, 2);
};

console.log(potencia(9));
console.log(potencia(81));