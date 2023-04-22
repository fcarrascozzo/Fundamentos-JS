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

cliente.endereco.push({
    rua: "Praça dos Bug's",
    bairro: "Travessa do Código Aberto",
    numero: 403,
    apartamento: false
})

const listaApenasApartamentos = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
)

console.log(listaApenasApartamentos)
