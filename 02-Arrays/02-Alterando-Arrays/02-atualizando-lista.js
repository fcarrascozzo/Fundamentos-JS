/* 
Crie uma lista de chamada com os seguintes alunos:
- 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'

Porém, a Ana e o Caio mudaram de escola e o Rodrigo entrou nesta sala. Atualize a 
lista
*/

const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

/* 
Splice é um metodo que retira o item do array. 
O primeiro parametro é a posição que gostariamos de tirar, ja o segundo é a 
quantidade de itens que gostariamos de remover apartir do primeiro parametro

O Splice aceita um terceiro parâmetro, no qual o terceiro ele adiciona no lugar dos que foram tirados
*/

nomes.splice(1, 2, "Rodrigo");

console.log(nomes);

