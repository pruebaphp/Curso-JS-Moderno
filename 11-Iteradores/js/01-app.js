/*for(let i=0; i<10; i++){
    console.log(`Hola desde for loop ${i}`);
}*/

const carrito = [
    {nombre: 'Monitor de 30\'', precio:500},
    {nombre: 'Television\'', precio:300},
    {nombre: 'Tablet\'', precio:140},
    {nombre: 'Audifonos\'', precio:250},
    {nombre: 'Teclado\'', precio:300},
    {nombre: 'Celar\'', precio:153},

]

console.log(carrito.length);

for(let i=0; i<carrito.length; i++){
    console.log(carrito[i].nombre)
}