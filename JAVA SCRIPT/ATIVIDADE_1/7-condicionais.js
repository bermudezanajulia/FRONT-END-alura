console.log(`Trabalhando com condicionais`);

const ListaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhado = false;
const temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(ListaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhado == true
    ){
    console.log("Boa Viajem!!!");
    ListaDeDestinos.splice(2,1);//removendo item
} else {
     console.log("Não é maior de idade não posso vender");
}

console.log ("Embarque: \n\n ")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viajem");
}else {
    console.log("Você não pode embarcar");
}
    

console.log (ListaDeDestinos);

 