// Divida os alunos da sala abaixo em duas listas com a mesma quantidade de alunos
// João, Juliana, Ana, Caio, Lara, Marjorie, Guilherme, Aline, Fabiana, Andre,
// Carlos, Paulo, Bia, Vivian, Isabela, Vinícius, Renan, Renata, Daisy, Camilo

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1 = alunos.slice(0, 10);
const sala2 = alunos.slice(10); 

// ao não colocar o segundo parametro o JS entende que queremos do item informado no primeiro porametro, até o final do array

/* 
slice significa dividir ou fatiar, o primeiro parametro serve para informarmos
onde essa divisão começa, ja o segundo, onde ela termina, mas este item não irá 
ser incluso na divisão, no caso ele é o primeiro item após a divisão. este método 
não altera o array original. Porém ele nos retorna um novo array
*/
console.log(alunos);
console.log('Sala 1 normal', sala1);
console.log('Sala 2 normal', sala2);

// outra forma de resolver

const sala3 = alunos.slice(0, alunos.length / 2);
const sala4 = alunos.slice(alunos.length / 2);

console.log('Sala 1 com length', sala3);
console.log('Sala 2 com length', sala4);