// tipo de dado 
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString); // são iguais
console.log(numero + numeroString); // porém não somam um ao outro e sim se concatenam

// conversão explícita

console.log(numero + Number(numeroString));