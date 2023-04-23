const dados = require("./01-cliente.json")

console.log(typeof dados)
console.log(dados)

const clienteEmString = JSON.stringify(dados)

console.log("")
console.log(typeof clienteEmString)
console.log(clienteEmString)

console.log("")
const objetoCliente = JSON.parse(clienteEmString)
console.log(typeof objetoCliente)
console.log(objetoCliente)