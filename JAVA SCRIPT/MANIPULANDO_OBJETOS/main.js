let listaDeItens = [];

const form = document.getElementsById("form-itens")
const itensInput = document.getElementById("receber-item")

form.addEventListener("submit" , function (evento){
    evento.preventDefault()
    salvarItem()
})

function salvarItem() {
    const comprasItem = itemInput.value;
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase());

    if(checarDuplicado) {
        alert("Produto já existe");
    } else {
        listaDeItens.push({
        valor: comprasItem
         })
    }

    console.log(listaDeItens)
}

    
    
    
