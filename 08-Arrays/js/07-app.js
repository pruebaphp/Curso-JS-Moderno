const carrito = [];

//Definir un producto;

const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio: 400
}

const producto2={
    nombre: 'Celular Xiaomi',
    precio: 600,
}

carrito.push(producto);
carrito.push(producto2);


const producto3={
    nombre: 'Teclado RedDragon',
    precio: 100,
}
carrito.push(producto3);
/*
//para agregar un elemento al inicio del arreglo
carrito.unshift(producto3);

console.table(carrito);

//Eliminar ultimo elemento del arreglo;

carrito.pop();

console.table(carrito);

//Eliminar el primer elemento del arreglo;

carrito.shift(carrito);


console.table(carrito);
*/

console.table(carrito);
carrito.splice(2,1);

console.table(carrito);