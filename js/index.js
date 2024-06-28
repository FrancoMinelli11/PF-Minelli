// function Compra(prenda, tipo, cantidad, medioPago, precio) {
//     this.prenda = prenda;
//     this.tipo = tipo;
//     this.cantidad = cantidad;
//     this.medioPago = medioPago;
//     this.precio = precio;
//     this.precioTotal = precio * cantidad;
// }

// let comprasArray = [];

// function obtenerTipo(prenda) {
//     let opciones = {
//         buzo: ["rojo", "azul", "verde"],
//         pantalon: ["jean", "joggin", "cargo"],
//         remera: ["rojo", "azul", "verde"]
//     };

//     while (true) {
//         let tipo = prompt(`Escriba el color/tipo de ${prenda} que le gustaría (${opciones[prenda].join(" - ")})`).toLowerCase().trim();
//         if (opciones[prenda].includes(tipo)) {
//             return tipo;
//         } else {
//             alert("Ingrese una opción válida.");
//         }
//     }
// }

// function obtenerCantidad() {
//     while (true) {
//         let cantidad = Number(prompt("Escriba cuantos artículos le gustaría llevar (máximo 3)"));
//         if (!isNaN(cantidad) && cantidad > 0 && cantidad <= 3) {
//             return cantidad;
//         } else {
//             alert("Ingrese un número válido menor o igual a 3.");
//         }
//     }
// }

// function obtenerMedioPago() {
//     let medios = ["tarjeta", "efectivo", "transferencia"];
//     while (true) {
//         let medio = prompt("Escriba método de pago (Tarjeta - Efectivo - Transferencia)").toLowerCase().trim();
//         if (medios.includes(medio)) {
//             return medio;
//         } else {
//             alert("Ingrese un medio de pago válido.");
//         }
//     }
// }

// function realizarCompra() {
//     let precios = { pantalon: 20000, buzo: 15000, remera: 10000 };
//     let continuarCompra;

//     do {
//         alert("Lista de precios:\nPantalones = $20000\nBuzos = $15000\nRemeras = $10000");
//         let prenda = prompt("Elija que tipo de prenda desea comprar (Pantalón - Remera - Buzo - Nada)").toLowerCase().trim();

//         if (prenda === "nada") break;

//         if (prenda in precios) {
//             let tipo = obtenerTipo(prenda);
//             let cantidad = obtenerCantidad();
//             let medioPago = obtenerMedioPago();
//             let precio = precios[prenda];

//             comprasArray.push(new Compra(prenda, tipo, cantidad, medioPago, precio));
//         } else {
//             alert("Ingrese una prenda válida.");
//         }

//         continuarCompra = confirm("¿Desea agregar algo más?");
//     } while (continuarCompra);
// }

// function mostrarResumenCompras() {
//     let sumaTotal = 0;

//     for (let compra of comprasArray) {
//         alert(`Usted lleva ${compra.cantidad} unidades de ${compra.prenda} ${compra.tipo} y pagará mediante ${compra.medioPago}`);
//         alert(`Precio final = $${compra.precioTotal}`);
//         sumaTotal += compra.precioTotal;
//     }

//     alert(`El total a pagar es de $${sumaTotal}`);
// }


// Llamado de elementos de HTML
const INPUT_NAME = document.getElementById('nombre-producto');
const INPUT_URL = document.getElementById('url-producto');
const INPUT_PRECIO = document.getElementById('precio-producto');
const INPUT_DESCRIPCION = document.getElementById('descripcion-producto');
const PAGINA_CREAR = document.getElementById('pagina-crear')
const BTN_CREAR = document.getElementById('crear-producto');
const BTN_SELECCIONAR_IMAGEN = document.getElementById('seleccionar-imagen');

// Función para manejar la selección de imagen
BTN_SELECCIONAR_IMAGEN.addEventListener('click', async () => {
    const { value: file } = await Swal.fire({
        title: "Seleccionar imagen",
        input: "file",
        inputAttributes: {
            "accept": "image/*",
            "aria-label": "Carga la imagen del producto"
        },
        buttonsStyling: false,
        customClass:{
            popup: 'popup',
            confirmButton: 'boton-popup'
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonText: 'Cargar',
    });
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            Swal.fire({
                title: "Esta es la imagen cargada",
                imageUrl: e.target.result,
                imageAlt: "The uploaded picture"
            });
            INPUT_URL.value = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Función para crear producto
function agregarProducto(evento) {
    evento.preventDefault();
    const NOMBRE = INPUT_NAME.value;
    const URL = INPUT_URL.value;
    const PRECIO = INPUT_PRECIO.value;
    const DESCRIPCION = INPUT_DESCRIPCION.value;
    const PAG = PAGINA_CREAR.value;

    if (NOMBRE && URL && PRECIO && DESCRIPCION) {
        const PRODUCTO = {
            nombre: NOMBRE,
            foto: URL,
            precio: PRECIO,
            descripcion: DESCRIPCION
        };


        // Guardar producto en localStorage
        let productos = JSON.parse(localStorage.getItem(PAG)) || [];
        productos.push(PRODUCTO);
        localStorage.setItem(PAG, JSON.stringify(productos));

        INPUT_NAME.value = '';
        INPUT_URL.value = '';
        INPUT_PRECIO.value = '';
        INPUT_DESCRIPCION.value = '';
        PAGINA_CREAR.value = '';

        window.location.href = PAG;
    } else {
        alert("Valores inválidos");
    }
}

BTN_CREAR.addEventListener('click', agregarProducto);

