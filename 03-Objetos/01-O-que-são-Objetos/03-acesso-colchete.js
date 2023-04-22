const cliente = {
    nome: "André",
    idade: 32,
    cpf: "12345678910",
    email: "andre@dominio.com"
}


// a propriedade [] também nos permite acessar uma caracteristica do objeto

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`)

const chaves = ["nome", "idade", "cpf", "email", "endereço"]

chaves.forEach((chave) =>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})