function apresentar(nome){
    return `Meu nome é ${nome}`;
}

// Arrow Function
const apresentarArrow = nome => `Olá, meu nome é ${nome}`;
const soma = (a, b) => a + b;

// Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (a, b) => {
    if(a >= 10 || b >= 10){
        return "somente números de 1 a 9"
    }else{
        return a + b
    }
}

console.log(somaNumerosPequenos(9, 9))