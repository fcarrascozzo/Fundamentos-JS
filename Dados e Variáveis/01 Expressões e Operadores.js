/* Operadores em JS

+ = soma
- = subtração
* = multiplicação
/ = Divisão
() = Grupos
** = exponenciação

a ordem de prioridade é (), **, *, /, + e -
*/

console.log(2 + 2);
console.log(2 * 2);
console.log(2 - 2);
console.log(2 / 2);

/* 

/ e * tem prioridade

no caso de (10 + 5 * 5), será igual a (10 + 25) totalizando 35

*/

console.log(10 + 5 * 5);

/*

15 + 10 + 12 / 3, por exemplo é igual a (15 + 10 + 4) totalizando 29

*/

console.log(15 + 10 + 12 / 3);

/*
para usar corretamente a formula de média acima, precisamos colocar dentro de parentes o que queremos antes, o () sempre tem prioridade sobre tudo, o resultado aqui é 12,33

*/

console.log((15 + 10 + 12) / 3);

/*

Operadores de atribuição

site para melhor compreenção https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators

Atribuição	x = y | x = y

Atribuição de adição x += y	| x = x + y

Atribuição de subtração	x -= y | x = x - y

Atribuição de multiplicação	x *= y | x = x * y

Atribuição de divisão	x /= y | x = x / y

Atribuição de resto	x %= y | x = x % y

Atribuição exponencial	x **= y	| x = x ** y

Atribuição bit-a-bit por deslocamento á esquerda x <<= y | x = x << y

Atribuição bit-a-bit por deslocamento á direita	x >>= y	| x = x >> y

Atribuiçãode bit-a-bit deslocamento á direita não assinado x >>>= y	| x = x >>> y

Atribuição AND bit-a-bit x &= y	| x = x & y

Atribuição XOR bit-a-bit x ^= y	| x = x ^ y

Atribuição OR bit-a-bit	x |= y | x = x | y


Operadores de comparação


Igual (==)	Retorna verdadeiro caso os operandos sejam iguais.	3 == var1 "3" == var1 3 == '3'

Não igual (!=)	Retorna verdadeiro caso os operandos não sejam iguais.	var1 != 4 var2 != "3"

Estritamente igual (===)	Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. 3 === var1

Estritamente não igual (!==)	Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.	var1 !== "3" 3 !== '3'

Maior que (>)	Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.	var2 > var1 "12" > 2

Maior que ou igual (>=)	Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.	var2 >= var1 var1 >= 3

Menor que (<)	Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.	var1 < var2 "12" < "2"

Menor que ou igual (<=)	Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita.	var1 <= var2 var2 <= 5


Operadores aritméticos

% retorna o inteiro restante da vivisão de dois números, ex 12 % 5 retorna 2

++ adiciona um ao operando, se x = 3, ++x torna x = 4

-- subtrai u, ao operando, se x = 3, --x torna x = 2
*/
