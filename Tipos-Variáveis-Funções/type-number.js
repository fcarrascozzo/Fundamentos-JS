// tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica); // dado deve ser 3

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5; // não precisa informar o zero antes da , por exemplo 0,5 pode ser .5

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao); // resultado = 0.30303030303030304

// NaN -> Not A Number (não é um número)

const texto = "Texto";
console.log(texto * primeiroNumero);