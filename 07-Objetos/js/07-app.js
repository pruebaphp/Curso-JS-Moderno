const producto = {
    //al nombre se le conoce como llave o propiedad del objeto , atributo
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

producto.disponible = false;

delete producto.precio;

console.log(producto);