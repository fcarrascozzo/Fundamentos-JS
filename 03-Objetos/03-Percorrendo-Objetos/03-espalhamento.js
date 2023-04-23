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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0]
}

console.log(encomenda)