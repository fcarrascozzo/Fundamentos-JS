const nomes = ['Evaldo', 'Mari', 'Fernando'];

nomes.forEach(function (nome){
    console.log(nome);
});

console.log('----------Separando----------')

nomes.forEach((nome) => {
    console.log(nome);
});

console.log('----------Separando----------')

function imprimeNome(nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);