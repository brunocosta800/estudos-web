//            012345678910
const nome = 'Bruno Costa'

//                 0       1       2
const alunos = ['Luiz', 'Maria', 'João'];

// alunos[0] = 'Eduardo'; // Adiciona no fim
// alunos[3] = 'Luiza'; 

// alunos[alunos.length] = 'Geraldo'; // Adiciona no fim
// alunos[alunos.length] = 'Beraldo';
// alunos[alunos.length] = 'Luana';

alunos.push('Eduardo'); // Adiciona no fim
alunos.unshift('Luiza'); // Adiciona no início

alunos.pop(); // Exclue o último elemento
alunos.shift(); // Exclue o primeiro elemento

delete(alunos[1]); // Deleta um elemento e deixa o índice vazio
console.log(alunos[1]);

console.log(alunos);

console.log(typeof alunos);
console.log(alunos instanceof Array);