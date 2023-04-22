/*
Um professor acidentalmente adicionou nomes repetidos na lista de chamada:

['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João']

remova os nomes repetidos deixando apenas um de cada.
*/

const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);