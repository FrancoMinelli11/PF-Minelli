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
        const ITEM_HTML = `<div class="div-carrito">
            <img src="${tuki.foto}" alt="" class="img-articulo">
            <div class="info-carrito">
                <h2 class="h2">${tuki.nombre}</h2>
                <h3 class="precio-carrito">$${tuki.precio}</h3>
                <button class="btn-eliminar btn btn-look" data-index="${index}">Eliminar</button>
            </div>
        </div>`;
        cero += Number(tuki.precio);
        BTN_CARRITO.innerHTML += ITEM_HTML;
    });

    const DIVI = `<h2 id="total-carrito">TOTAL A PAGAR  $${cero}</h2>`;
    BTN_CARRITO.innerHTML += DIVI;

    document.querySelectorAll('.btn-eliminar').forEach(button => {
        button.addEventListener('click', eliminarProducto);
    });
}

function eliminarProducto(event) {
    // Recuperar el índice del producto a eliminar
    const index = event.target.getAttribute('data-index');
    let productos = JSON.parse(localStorage.getItem('aver')) || [];

    // Eliminar el producto del array usando el índice
    productos.splice(index, 1);

    // Actualizar el localStorage con el nuevo array de productos
    localStorage.setItem('aver', JSON.stringify(productos));

    // Volver a renderizar el carrito para reflejar los cambios
    carro();
}

document.addEventListener('DOMContentLoaded', carro);
