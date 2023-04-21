const notas = [10, 5.5, 9.5, 8.5];

let somaDasNotas = 0;

for (let nota of notas) {
    somaDasNotas += nota
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);