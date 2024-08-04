let listaDeItens = [];

const form = document.querySelector('#form-itens');
const itensInput = document.querySelector('#receber-item');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    salvarItem();
})

function salvarItem() {
    const comprasItem = itensInput.value;

    const checarItemDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase());

    if(checarItemDuplicado) {
        alert('Este item já foi adicionado à lista.');
    } else {
    listaDeItens.push({
        valor: comprasItem
    });           
}

console.log(listaDeItens);
}
