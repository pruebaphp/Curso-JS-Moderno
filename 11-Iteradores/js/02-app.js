/*for(let i=0; i<10; i++){

    if(i===5){
        console.log(`CINCO`);
        continue;
    }
    console.log(`Hola desde for loop ${i}`);
}*/


const carrito = [
    {nombre: 'Monitor de 30\'', precio:500},
    {nombre: 'Television\'', precio:300},
    {nombre: 'Tablet 15\'', precio:140,descuento:true},
    {nombre: 'Audifonos\'', precio:250},
    {nombre: 'Teclado\'', precio:300},
    {nombre: 'Celar\'', precio:153},

]


for(let i=0; i<carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} en la posición ${i} tiene descuento`);
    }
    console.log(carrito[i].nombre);
}