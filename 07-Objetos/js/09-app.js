//habilitando el modo estricto
"use strict";

const producto = {
    nombre: 'Televisor de 30 pulgadas\'',
    precio: 300,
    disponible: true,
}


Object.seal(producto);

producto.disponible = false;


// producto.disponible=false;
// producto.imagen = "imagen.jpg";
//delete producto.precio;

console.log(producto);

