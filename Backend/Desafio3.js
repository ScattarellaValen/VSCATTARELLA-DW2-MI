let nombreProducto = "Alfajor Milka";
let precioUnitario = 1200;
let cantidadDeseada= prompt("¿Cuál es la cantidad que desea comprar del producto?");
cantidadDeseada = parseInt (cantidadDeseada);
let totalsinDescuento = precioUnitario * cantidadDeseada;
let total;
if (cantidadDeseada >= 5) {
    let Descuento = totalsinDescuento * 0.1;
    total = totalsinDescuento - Descuento;
} else {
    total = totalsinDescuento;
}
alert("El costo de " + cantidadDeseada + " productos " + nombreProducto + " será de $" + total);