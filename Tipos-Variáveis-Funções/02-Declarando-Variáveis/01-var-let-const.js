// var (declara variavel mas não pe recomendado usar, pois a mesma permite falhas devido poder ser declarada a qualquer momento, inclusive depois de ja ter sido usada)

var alturaV = 5;
var comprimentoV = 6;
var areaV = alturaV * comprimentoV;

console.log('Area com var =',areaV);

// let (declara variavel, porém deve ser declarado antes de ser usada)

let forma = 'retângulo';
let alturaL = 5;
let comprimentoL = 8;
let areaL;

if(forma === 'retângulo'){
    areaL = alturaL * comprimentoL;
}else{
    areaL = (alturaL * comprimentoL) / 2
}

console.log('Area com let =',areaL);

// const (declara uma constante, valor que não pode ser alterado em momento nenhum no código, também deve ser declarado antes de ser usado)

const formaC = 'quadrado';
const alturaC = 10;
const comprimentoC = 5;
let areaC;

if(formaC === 'quadrado'){
    areaC = alturaC * comprimentoC;
}else{
    areaC = (alturaC * comprimentoC) / 2
}

console.log('Area com const =',areaC);
