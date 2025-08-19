function meuEscopo (){
    const form = document.querySelector('.form');
    const pessoas = [];

    function criaPessoa (nome, sobrenome, peso, altura){
        return{
            nome,
            sobrenome,
            peso,
            altura
        };
    }

    // form.onsubmit = function (event){
    //     event.preventDefault();
    //     alert(1);
    //     console.log("Foi enviado");
    // };

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push(criaPessoa(nome.value, sobrenome.value, peso.value, altura.value));
        console.log(pessoas);
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();