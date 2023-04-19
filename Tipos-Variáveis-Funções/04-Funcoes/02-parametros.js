function soma(a, b){
    return a + b
}

//console.log(soma(2, 5));

// paramentos x argumentos

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade("Fernando", "24"));

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));
