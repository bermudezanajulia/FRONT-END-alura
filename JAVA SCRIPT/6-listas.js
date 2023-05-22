console.log(`Trabalhando com listas`);
//const salvador = `Salvador`;
//const saoPulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;

const ListaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

ListaDeDestinos.push(`Curitiba`) //Adicionando um item na lista

console.log("Destinos possíveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(ListaDeDestinos);

ListaDeDestinos.splice(1,1);
console.log (ListaDeDestinos);

console.log(ListaDeDestinos[1]);    