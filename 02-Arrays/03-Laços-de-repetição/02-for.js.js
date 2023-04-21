/*
Imprima o índice e a lista com os seguintes números: 100, 200, 300, 400, 500 e 600.
*/

const numeros = [100, 200, 300, 400, 500, 600];

// primeira expressão: é executada apenas uma vez
// Segunda expressão: condição de execução
// terceira expressão: é executada sempre ao final do bloco

//expressão:   1                  2             3
for(let indice = 0; indice < numeros.length; indice++){
    console.log(`${indice}:`, numeros[indice]);
}