function Compra(prenda, tipo, cantidad, medioPago, precio) {
    this.prenda = prenda;
    this.tipo = tipo;
    this.cantidad = cantidad;
    this.medioPago = medioPago;
    this.precio = precio;
    this.precioTotal = precio * cantidad;
    }
let elija;
const BUZ = true;
const MET = true;
let comprasArray = [];
function venta(){
do {
    alert("Lista de precios: \n Pantalones = $20000 \n Buzos = $15000 \n Remeras = $10000")
    let prenda = prompt("Elija que tipo de prenda desea comprar(Pantalón - Remera - Buzo - Nada)").toLowerCase().trim();
    if (prenda == "buzo") {
        let prendaN = prenda;
        let cantidadP;
        let medioPagoP;
        let precioP;
        let tipoP;
        while(BUZ){
        tipoP = prompt("Escriba que color de buzo le gustaría(Rojo - Azul - Verde)").toLowerCase().trim();
        if (tipoP === "rojo" || tipoP === "azul" || tipoP === "verde") {
            while (BUZ) {
                cantidadP = Number(prompt("Escriba cuantos artículos le gustaría llevar(máximo 3)"))
                if (isNaN(cantidadP) || cantidadP > 3 || cantidadP == "") {
                    alert("Ingrese un número menor o igual 3")
                }
                else {
                    while (MET) {
                        medioPagoP = prompt("Escriba método de pago(Tarjeta - Efectivo - Transferencia)").toLowerCase().trim();
                        if (medioPagoP == "tarjeta" || medioPagoP == "efectivo" || medioPagoP == "transferencia") {
                            precioP = 15000
                            break
                        }
                        else {
                            alert("Ingrese un medio de pago válido")
                        }
                    }
                    break
                }
            }
            break
        }
        else{
            alert("Ingrese uno de los colores indicados")
        }
    }
        comprasArray.push(new Compra(prendaN, tipoP, cantidadP, medioPagoP, precioP))
    }
    else if (prenda == "pantalon") {
        let prendaN = prenda;
        let cantidadP;
        let medioPagoP;
        let precioP;
        let tipoP;
        while(BUZ){
            tipoP = prompt("Escriba que tipo de pantalón le gustaría(Jean - Joggin - Cargo)").toLowerCase().trim();
        if (tipoP === "jean" || tipoP === "joggin" || tipoP === "cargo") {
            while (BUZ) {
                cantidadP = Number(prompt("Escriba cuantos artículos le gustaría llevar(máximo 3)"))
                if (isNaN(cantidadP) || cantidadP > 3 || cantidadP == "") {
                    alert("Ingrese un número menor o igual 3")
                }
                else {
                    while (MET) {
                        medioPagoP = prompt("Escriba método de pago(Tarjeta - Efectivo - Transferencia)").toLowerCase().trim();
                        if (medioPagoP == "tarjeta" || medioPagoP == "efectivo" || medioPagoP == "transferencia") {
                            precioP = 20000
                            break
                        }
                        else {
                            alert("Ingrese un medio de pago válido")
                        }
                    }
                    break
                }
            }
            break
        }
        else{
            alert("Ingrese uno de los tipos indicados")
        }
    }
        comprasArray.push(new Compra(prendaN, tipoP, cantidadP, medioPagoP, precioP))
    }
    else if (prenda == "remera") {
        let prendaN = prenda;
        let cantidadP;
        let medioPagoP;
        let precioP;
        let tipoP;
        while(BUZ){
        tipoP = prompt("Escriba color de remera que le gustaría(Rojo - Azul - Verde)").toLowerCase().trim();
        if (tipoP === "rojo" || tipoP === "azul" || tipoP === "verde") {
            while (BUZ) {
                cantidadP = Number(prompt("Escriba cuantos artículos le gustaría llevar(máximo 3)"))
                if (isNaN(cantidadP) || cantidadP > 3 || cantidadP == "") {
                    alert("Ingrese un número menor o igual 3")
                }
                else {
                    while (MET) {
                        medioPagoP = prompt("Escriba método de pago(Tarjeta - Efectivo - Transferencia)").toLowerCase().trim();
                        if (medioPagoP == "tarjeta" || medioPagoP == "efectivo" || medioPagoP == "transferencia") {
                            precioP = 10000
                            break
                        }
                        else {
                            alert("Ingrese un medio de pago válido")
                        }
                    }
                    break
                }
            }
            break
        }
        else{
            alert("Ingrese uno de los colores indicados")
        }
    }
        comprasArray.push(new Compra(prendaN, tipoP, cantidadP, medioPagoP, precioP))
    }
    elija = confirm("¿Desea agregar algo más?")
} while (elija)
}
venta()
suma = 0;
for (let productos of comprasArray) {
    alert(`Usted lleva ${productos.cantidad} unidades de ${productos.prenda} ${productos.tipo} y pagará mediante ${productos.medioPago}`)
    alert(`Precio final = $${productos.precioTotal}`)
}
comprasArray.forEach(function(productoTotal){
    suma += productoTotal.precioTotal;
})
alert(`El total a pagar es de $${suma}`)