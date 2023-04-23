const cliente = {
    nome: "Fernando",
    idade: 24,
    email: "fernando@dominio.com",
    telefone: ["(43) 9 1111 - 5555", "(43) 9 2222 - 5555"]
}

/*
cliente.endereco = [
    {
        rua: "R. Loop Infinito",
        bairro: "Travessa do Git Commit",
        numero: 404,
        apartamento: true,
        complemento: "ap 101"
    }
]
*/
const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("endereco")){
    console.error("Erro. É necessário ter um endereço cadastrado.")
}