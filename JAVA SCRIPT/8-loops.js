console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

let contador = 0;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino){
        console.log("Destino existe"); 
    }else {
    console.log("Destino existe");
}
    contador += 1;
}

