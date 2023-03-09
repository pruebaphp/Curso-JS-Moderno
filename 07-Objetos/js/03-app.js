const producto = {
    //al nombre se le conoce como llave o propiedad del objeto , atributo
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    
}

//Agregar nuevas propiedades al objeto

producto.imagen = "imagen.png";

//Eliminando una llave o atributo de un Object literal

delete producto.disponible;

console.log(producto);