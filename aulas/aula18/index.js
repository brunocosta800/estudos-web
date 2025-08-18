// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// const pessoa2 = {
//     nome: 'Miguel',
//     sobrenome: 'Costa',
//     idade: 28
// };

function criaPessoa (nome, sobrenome, idade){
    return{
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = {
        nome: 'Luiz',
        sobrenome: 'Miranda',
        idade: 25,

        fala(){
            console.log(`A minha idade atual é ${this.idade} `)
        }
};

const pessoa2 = criaPessoa('Maria', 'Oliveira', 30);
const pessoa3 = criaPessoa('João', 'Vitor', 18);

pessoa1.fala();