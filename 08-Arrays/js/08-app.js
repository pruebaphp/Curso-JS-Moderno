const producto = {
    //al nombre se le conoce como llave o propiedad del objeto , atributo
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    
}
// const nombre = producto.nombre;
// console.log(nombre);


//Destructuring sacar de una estructura
const { nombre } = producto;


console.log(nombre);


//Destricturing con Arreglos

const numeros = [10,20,30,40,50];

//const [primero, segundo, tercero] = numeros;

//const [ , , tercero] = numeros;

const [ primero , segundo , ...tercero] = numeros;

console.log(tercero);