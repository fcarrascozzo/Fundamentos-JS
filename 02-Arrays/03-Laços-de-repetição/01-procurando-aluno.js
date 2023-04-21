/* 
- Crie uma função que recebe como argumento o nome de um aluno. Em seguida, verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice, caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.
*/

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)){ // includes confere se o parametro está incluso na lista
        const [alunos, medias] = listaDeAlunosEMedias;
        const indice = alunos.indexOf(aluno); // indexOF retorna o index do parametro
        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    }else{
        console.error(`${aluno} não está cadastrado no sistema`);
    }
}

exibeNomeENota('João');
exibeNomeENota('Juliana');
exibeNomeENota('Caio');
exibeNomeENota('Carlos');
exibeNomeENota('Ana');