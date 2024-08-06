let listaDeItens = [];
let itemAEditar;

const form = document.querySelector('#form-itens');
const itensInput = document.querySelector('#receber-item');
const ulItens = document.querySelector('#lista-de-itens');
const ulItensComprados = document.querySelector('#itens-comprados');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    salvarItem();
    mostrarItem();
    itensInput.focus();
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
}

function mostrarItem() {
    ulItens.innerHTML = '';
    ulItensComprados.innerHTML = '';

    listaDeItens.forEach((elemento, index) => {
        if(elemento.checar) {
            ulItensComprados.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" checked class="is-clickable" />  
                    <span class="itens-comprados is-size-5">${elemento.valor}</span>
                </div>
                <div>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>
            `;
        } else {
                ulItens.innerHTML += `
                <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                    <div>
                        <input type="checkbox" class="is-clickable" />
                        <input type="text" class="is-size-5" value="${elemento.valor}"></input>
                    </div>
                    <div>
                        <i class="fa-regular fa-floppy-disk is-clickable"></i><i class="fa-regular is-clickable fa-pen-to-square editar"></i>
                        <i class="fa-solid fa-trash is-clickable deletar"></i>
                    </div>
                </li>
                `;
            }
        })

    const inputsCheck = document.querySelectorAll('input[type="checkbox"]');

    inputsCheck.forEach(i => {
        i.addEventListener('click', (evento) => {
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value');
            listaDeItens[valorDoElemento].checar = evento.target.checked;
            console.log(listaDeItens[valorDoElemento].checar);
            mostrarItem();
        });
    });

    const deletarObjetos = document.querySelectorAll('.deletar');

    deletarObjetos.forEach(i => {
        i.addEventListener('click', (evento) => {
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value');
            listaDeItens.splice(valorDoElemento,1);
            mostrarItem();
        });
    });

    const editarItens = document.querySelectorAll('.editar');

    editarItens.forEach(i => {
        i.addEventListener('click', (evento) => {
            itemAEditar = evento.target.parentElement.parentElement.getAttribute('data-value');
            mostrarItem();
            console.log(itemAEditar);
        });
    });
}
