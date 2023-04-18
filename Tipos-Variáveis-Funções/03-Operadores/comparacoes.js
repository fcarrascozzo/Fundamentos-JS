// == (Comparação implícita) só compara o valor

const numero = 12;
const texto = "12";

console.log(numero == texto); // True

// === (Comparação explícita) compara o valor e o tipo de dado, se não bater todas as opções, ele informará como false

console.log(numero === texto); // false

console.log(typeof numero); // Number
console.log(typeof texto); // String

/* Alguns operadores

  = : Atribui um valor
 == : Compara os valores
=== : Compara os valores e o tipo da variável
 || : Operador “ou”, retorna true caso uma condição seja válida
 && : Operador “e”, retorna true somente se todas as condições forem válidas
 != : Operador não igual, funciona como ==
!== : Operador estritamente não igual, funciona como ===

*/