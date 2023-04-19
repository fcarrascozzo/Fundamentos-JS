/*
Crie uma lista com os seguintes alunos e alunas:
- 'João', 'Juliana', 'Caio', 'Ana'

Crie uma lista com as seguintes médias:
- 10, 8, 7.5, 9

crie uma lista que contém as duas listas acima
*/

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(
    `O Aluno da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}, a sua nota é ${listaDeAlunosEMedias[1][1]}`
    )