const producto = {
    //al nombre se le conoce como llave o propiedad del objeto , atributo
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    
}
// const nombre = producto.nombre;
// console.log(nombre);


//Destructuring sacar de una estructura
const { nombre,precio,disponible } = producto;


console.log(nombre);
console.log(precio);