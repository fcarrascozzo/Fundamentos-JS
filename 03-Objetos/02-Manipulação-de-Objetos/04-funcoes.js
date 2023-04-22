const cliente = {
    nome: "Fernando",
    idade: 24,
    email: "fernando@dominio.com",
    telefone: ["(43) 9 1111 - 5555", "(43) 9 2222 - 5555"],
    saldo: 200,
    efetuaPagamento: function (valor){
        if (valor > this.saldo) { // this acessa os dados do objeto
            console.log("Saldo insuficiente, para efetuar o pagamento você irá precisar de mais", valor - this.saldo,"de saldo")
        } else {
            this.saldo -= valor
            console.log(`Pagamento realizado. Novo saldo ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(150)
cliente.efetuaPagamento(60)
