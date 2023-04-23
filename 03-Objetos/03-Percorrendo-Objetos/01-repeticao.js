const cliente = {
    nome: "Fernando",
    idade: 24,
    email: "fernando@dominio.com",
    telefone: ["(43) 9 1111 - 5555", "(43) 9 2222 - 5555"]
}

cliente.endereco = [
    {
        rua: "R. Loop Infinito",
        bairro: "Travessa do Git Commit",
        numero: 404,
        apartamento: true,
        complemento: "ap 101"
    }
]

for (let chave in cliente){
    
    let tipo = typeof cliente[chave]
    
    if (tipo !== 'object' && tipo !== 'function'){
        console.log(`A chave ${chave} tem o valor: ${cliente[chave]}`)
    }
}
