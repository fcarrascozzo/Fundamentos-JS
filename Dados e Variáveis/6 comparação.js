/*
    igual em JavaScript é (==)
    diferente em JavaScript é (!=)
    menor em JavaScript é (<)
    menor igual em JavaScript é (<=)
    maior em JavaScript é (>)
    maior igual em JavaScript é (>=)
*/

10 == 10 // true 
10 != 10 // false
10 < 10 // false
10 <= 10 // true
10 > 10 // false
10 >= 10 // true
10 < 20 // true

// comparação de texto

"Fernando" == "Fernando" // true
"fernando" == "Fernando" // false
"A" < "B" // true
"C" > "D" // false

// variaveis

var a = 10
var b = 20

a > b // false
a == b // false

// tomar cuidado
// declaramos um valor para a e b, se fizermos o exemplo abaixo, a terá o valor de b, isso pode bagunçar seu código

a = b 

// agora a é igual a b, e o ex abaixo será true

a == b // true