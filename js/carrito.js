// //Llamado de elementos
const BTN_CARRITO = document.getElementById('elementos')
// const VER_CARRITO = document.getElementById('ver-carrito')

// //Funciones
let cero = 0;
function carro () {
    const PRODUCTOS = JSON.parse(localStorage.getItem('aver'))
    BTN_CARRITO.innerHTML = ""
    PRODUCTOS.forEach(tuki => {
        const ITEM_HTML = `<div class="div-carrito">
        <img src="${tuki.foto}" alt="" class="img-articulo">
        <div class="info-carrito">
        <h2 class="h2">${tuki.nombre}</h2>
        <h3 class="precio-carrito">$${tuki.precio}</h3>
        </div>
        </div>`
        cero += Number(tuki.precio)
        BTN_CARRITO.innerHTML += ITEM_HTML
        });
        const DIVI = document.createElement('div').innerHTML = `<h2 id="total-carrito">TOTAL A PAGAR  $${cero}</h2>`;
        BTN_CARRITO.innerHTML += DIVI
}
document.addEventListener('DOMContentLoaded', carro)

