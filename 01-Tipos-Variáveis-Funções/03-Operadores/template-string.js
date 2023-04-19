const nome = "Fernando";
const idade = 2023 - 1999;
const cidadeDeNascimento = "Apucarana";
const apresentacao = "meu nome é " + nome + "! Tenho " + idade + " E nasci em " + cidadeDeNascimento;

console.log(apresentacao);

// template-string

const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade} e nasci em ${cidadeDeNascimento}.`

console.log(apresentacao2);
