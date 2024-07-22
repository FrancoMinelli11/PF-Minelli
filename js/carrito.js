// Llamado de elementos
const BTN_CARRITO = document.getElementById('elementos');

// Funciones
let cero = 0;

function carro() {
    const PRODUCTOS = JSON.parse(localStorage.getItem('aver')) || [];
    BTN_CARRITO.innerHTML = "";
    cero = 0;

    // Renderizar cada producto en el carrito
    PRODUCTOS.forEach((tuki, index) => {
        const cantidad = tuki.cantidad || 1;
        let total = tuki.precio * cantidad;
        const ITEM_HTML = `<div class="div-carrito">
            <img src="${tuki.foto}" alt="" class="img-articulo">
            <div class="info-carrito">
                <h2 class="h2-carrito">${tuki.nombre} <span class="precio-carrito">$${total}</span></h2>
                <div id="div-cantidad">
                    <button class="restar" data-index="${index}">-</button> 
                    <input type="number" class="input-cantidad" data-index="${index}" value="${cantidad}"> 
                    <button class="sumar" data-index="${index}">+</button>
                </div>
                <button class="btn-eliminar btn btn-look" data-index="${index}"><i class="bi bi-trash3-fill"></i></button>
            </div>
        </div>`;
        cero += total;
        BTN_CARRITO.innerHTML += ITEM_HTML;
    });

    const DIVI = `<h2 id="total-carrito">TOTAL A PAGAR $${cero}</h2>`;
    BTN_CARRITO.innerHTML += DIVI;

    document.querySelectorAll('.btn-eliminar').forEach(button => {
        button.addEventListener('click', eliminarProducto);
    });

    document.querySelectorAll('.input-cantidad').forEach(input => {
        input.addEventListener('focusout', actualizarCantidad);
    });
    document.querySelectorAll('.sumar').forEach((button, index) => {
        button.addEventListener('click', () => cambiarCantidad(index, 1));
    });
    document.querySelectorAll('.restar').forEach((button, index) => {
        button.addEventListener('click', () => cambiarCantidad(index, -1));
    });
}

function eliminarProducto(event) {
    const index = event.target.getAttribute('data-index');
    let productos = JSON.parse(localStorage.getItem('aver')) || [];
    productos.splice(index, 1);
    localStorage.setItem('aver', JSON.stringify(productos));
    carro();
}

function actualizarCantidad(event) {
    const index = event.target.getAttribute('data-index');
    const nuevaCantidad = parseInt(event.target.value);
    let productos = JSON.parse(localStorage.getItem('aver')) || [];
    productos[index].cantidad = nuevaCantidad;
    if (productos[index].cantidad <= 0) {
        productos.splice(index, 1);
    }
    localStorage.setItem('aver', JSON.stringify(productos));
    carro();
}

function cambiarCantidad(index, delta) {
    let productos = JSON.parse(localStorage.getItem('aver')) || [];
    productos[index].cantidad += delta;
    if (productos[index].cantidad <= 0) {
        productos.splice(index, 1);
    }
    localStorage.setItem('aver', JSON.stringify(productos));
    carro();
}

document.addEventListener('DOMContentLoaded', carro);
