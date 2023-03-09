

const carrito = [
    {nombre: 'Monitor de 30\'', precio:500},
    {nombre: 'Television\'', precio:300},
    {nombre: 'Tablet\'', precio:140},
    {nombre: 'Audifonos\'', precio:250},
    {nombre: 'Teclado\'', precio:300},
    {nombre: 'Celar\'', precio:153},

]


/*for(let i=0; i<carrito.length; i++){
    console.log(`${carrito[i].precio} - Precio: ${carrito[i].precio}`);
}
*/
carrito.forEach(producto=>console.log(`Producto: ${producto.precio} - Precio: ${producto.precio}`));

// el map crea un nuevo arreglo y el foreach no crea un nuevo arreglo
const nuevoArreglo = carrito.map(producto=>`Producto: ${producto.precio} - Precio: ${producto.precio}`);

console.log(nuevoArreglo);