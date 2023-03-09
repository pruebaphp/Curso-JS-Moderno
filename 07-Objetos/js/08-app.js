//habilitando el modo estricto
"use strict";

const producto = {
    nombre: 'Televisor de 30 pulgadas\'',
    precio: 300,
    disponible: true,
}
//para congelar el objeto method y no poder modificar las propiedades

Object.freeze(producto);

// producto.disponible=false;
// producto.imagen = "imagen.jpg";
//delete producto.precio;

console.log(producto);
console.log(Object.isFrozen(producto));

