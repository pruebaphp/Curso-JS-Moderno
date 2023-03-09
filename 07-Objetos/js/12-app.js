//Object Literal
const producto = {
    nombre: 'Televisor de 30\'',
    precio: 300,
    disponible: true,
}

//Object Constructor


function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Monitor de 24 pulgadas",500);

console.log(producto2);

const producto3 = new Producto("Tele",600);