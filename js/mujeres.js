//Llamado de Contenedor para CARDS

const DIV_MUJERES = document.getElementById('div-mujeres-prendas');

// Función para agregar productos al DOM

function renderizarProductos() {
    //Llamar al archivo .json
    const ART = "../articulos.JSON"
    
    //Promesa para crear los artículos del .json
    fetch(ART)
    .then(respuesta => respuesta.json())
    .then((datos) => {
        cargarArti(datos)
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Elementos creados"))
    
    //Función para crear los artículos del .json
    function cargarArti (datos){
        datos.mujeres.forEach(arti => {
            const CARD_M = document.createElement('div');
            CARD_M.className = 'card card-look';
            CARD_M.innerHTML = `
            <img src="${arti.foto}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${arti.nombre}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">$${arti.precio}</h6>
            <p class="card-text">${arti.descripcion}</p>
            <a href="#" class="btn btn-look">Comprar ahora</a>
            </div>`;
            DIV_MUJERES.appendChild(CARD_M);
        })
    }

    //Traer productos del localStorage
    const productos = JSON.parse(localStorage.getItem('mujeres.html')) || [];

    //Crear el producto en HTML
    productos.forEach(producto => {
        const CARD = document.createElement('div');
        CARD.className = 'card card-look';
        CARD.innerHTML = `
            <img src="${producto.foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">$${producto.precio}</h6>
                <p class="card-text">${producto.descripcion}</p>
                <a href="#" class="btn btn-look">Comprar ahora</a>
            </div>`;
        DIV_MUJERES.appendChild(CARD);
    });
}


document.addEventListener('DOMContentLoaded', renderizarProductos);