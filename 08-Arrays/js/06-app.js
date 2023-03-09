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

const producto3={
    nombre: 'Teclado RedDragon',
    precio: 100,
}

let resultado;

resultado = [...carrito,producto];

resultado = [...resultado,producto2];

resultado = [producto3,...resultado];

console.table(resultado);
