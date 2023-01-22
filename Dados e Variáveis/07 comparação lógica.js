// Os booleanos possuem uma matemática própria, precisam dos seus próprios operadores.

// "OU" = ||
// "E" = &&
// "NÂO" = !

// ||

false || false // false
true  || false // true
false || true  // true
true  || true  // true

// O comparador OU (||) resulta em true quando qualquer valor for verdadeiro.

// &&

false && false // false 
true  && false // false
false && true  // false
true  && true  // true

// O comparador E (&&) resulta em false quando qualquer valor for falso

// MAIS DE UM COMPARADOR

false || false || true // true
false && false && true // false
false || true && true // true

// && tem prioridade sobre ||

(false || true) && true // true

// operador NOT (!) inverter a lógica



!false // true
!true // false

!(10 < 20) // false

(1 < 2) || (3 > 4) // true || false = true
(1 > 2) || (3 > 4) // false || false = false

(10 < 20) && (20 < 30) // true && true = true
(20 < 30) && (30 > 40) // true && false = false

(20 < 30) && !(30 > 40) // true && !false = true
