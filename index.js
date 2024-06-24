function Compra(prenda, tipo, cantidad, medioPago, precio) {
    this.prenda = prenda;
    this.tipo = tipo;
    this.cantidad = cantidad;
    this.medioPago = medioPago;
    this.precio = precio;
    this.precioTotal = precio * cantidad;
}

let comprasArray = [];

function obtenerTipo(prenda) {
    let opciones = {
        buzo: ["rojo", "azul", "verde"],
        pantalon: ["jean", "joggin", "cargo"],
        remera: ["rojo", "azul", "verde"]
    };

    while (true) {
        let tipo = prompt(`Escriba el color/tipo de ${prenda} que le gustaría (${opciones[prenda].join(" - ")})`).toLowerCase().trim();
        if (opciones[prenda].includes(tipo)) {
            return tipo;
        } else {
            alert("Ingrese una opción válida.");
        }
    }
}

function obtenerCantidad() {
    while (true) {
        let cantidad = Number(prompt("Escriba cuantos artículos le gustaría llevar (máximo 3)"));
        if (!isNaN(cantidad) && cantidad > 0 && cantidad <= 3) {
            return cantidad;
        } else {
            alert("Ingrese un número válido menor o igual a 3.");
        }
    }
}

function obtenerMedioPago() {
    let medios = ["tarjeta", "efectivo", "transferencia"];
    while (true) {
        let medio = prompt("Escriba método de pago (Tarjeta - Efectivo - Transferencia)").toLowerCase().trim();
        if (medios.includes(medio)) {
            return medio;
        } else {
            alert("Ingrese un medio de pago válido.");
        }
    }
}

function realizarCompra() {
    let precios = { pantalon: 20000, buzo: 15000, remera: 10000 };
    let continuarCompra;

    do {
        alert("Lista de precios:\nPantalones = $20000\nBuzos = $15000\nRemeras = $10000");
        let prenda = prompt("Elija que tipo de prenda desea comprar (Pantalón - Remera - Buzo - Nada)").toLowerCase().trim();

        if (prenda === "nada") break;

        if (prenda in precios) {
            let tipo = obtenerTipo(prenda);
            let cantidad = obtenerCantidad();
            let medioPago = obtenerMedioPago();
            let precio = precios[prenda];

            comprasArray.push(new Compra(prenda, tipo, cantidad, medioPago, precio));
        } else {
            alert("Ingrese una prenda válida.");
        }

        continuarCompra = confirm("¿Desea agregar algo más?");
    } while (continuarCompra);
}

function mostrarResumenCompras() {
    let sumaTotal = 0;

    for (let compra of comprasArray) {
        alert(`Usted lleva ${compra.cantidad} unidades de ${compra.prenda} ${compra.tipo} y pagará mediante ${compra.medioPago}`);
        alert(`Precio final = $${compra.precioTotal}`);
        sumaTotal += compra.precioTotal;
    }

    alert(`El total a pagar es de $${sumaTotal}`);
}

// let boton = document.getElementById("rojos")
// boton.addEventListener('click',realizarCompra)