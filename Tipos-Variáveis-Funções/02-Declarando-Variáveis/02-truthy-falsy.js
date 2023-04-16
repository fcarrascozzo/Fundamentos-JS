// boolean (true ou false)

const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

// 0 => false
// 1 => true

console.log(0 == false) // true, 0 é igual ao booleano false
console.log("" == false) // true, espaço vazio também é considerado falso para o JS
console.log(1 == true) // true, o 1 é igual ao booleano true

// undefined ==> não foi definido um valor

let nome;
console.log(nome);

// null  ==> vazio ou nada

let minhaVar = null;
console.log(minhaVar);

let numero = 3;
let nome2 = "Fernando";

console.log(typeof numero);
console.log(typeof nome2);
console.log(typeof minhaVar); // virá como objeto (caracteristica do javascript)
console.log(typeof nome);