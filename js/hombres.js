//Llamado de Contenedor para CARDS

const DIV_HOMBRES = document.getElementById('div-hombres-prendas');

// Función para agregar productos al DOM

function renderizarProductos() {
    //Traer productos del localStorage de elementos creados dentro de la web
    const productos = JSON.parse(localStorage.getItem('hombres.html')) || [];

    //Llamar al archivo .json
    const ART = "../articulos.JSON"
    
    //Promesa para crear todos los artículos
    fetch(ART)
    .then(respuesta => respuesta.json())
    .then((datos) => {
        cargarArti(datos)
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Elementos creados"))

        //Función para crear los artículos en la web
    
    function cargarArti (datos){
        const ARTICULOS_CARRITO_HOMBRES = [...datos.hombres, ...productos]
        ARTICULOS_CARRITO_HOMBRES.forEach(producto => {
            const BTN_CARRITO = document.createElement('a')
            BTN_CARRITO.className = 'btn btn-look';
            BTN_CARRITO.innerHTML = `<i class="bi bi-cart-plus"></i>`
            
            BTN_CARRITO.addEventListener('click', () => {
                //Función para el boton de añadir al carrito
                let carrito = JSON.parse(localStorage.getItem('aver')) || [];
                const ARRAY_PRODUCTO_CARRITO = {nombre: producto.nombre, precio: producto.precio, foto:producto.foto}
                carrito.push(ARRAY_PRODUCTO_CARRITO)
                localStorage.setItem('aver', JSON.stringify(carrito))
                })

            const CARD_H = document.createElement('div');
            CARD_H.className = 'card card-look';
            CARD_H.innerHTML = `
            <img src="${producto.foto}" class="card-img-top" alt="Prenda super épica by KayFs">
            <div class="card-body id="body-div">
            <h5 class="card-title">${producto.nombre}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">$${producto.precio}</h6>
            <p class="card-text">${producto.descripcion}</p>
            <a href="#" class="btn btn-look comprar-btn">COMPRAR AHORA</a>
            </div>`;
            const CARD_BODY = CARD_H.querySelector('.card-body');
            CARD_BODY.appendChild(BTN_CARRITO)
            DIV_HOMBRES.appendChild(CARD_H);
            })
        }
    }
document.addEventListener('DOMContentLoaded', renderizarProductos);

