const producto = {
    //al nombre se le conoce como llave o propiedad del objeto , atributo
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,

    informacion:{
       medidas:{
        peso: '1kg',
        medida: '1m',
       },
       fabricacion:{
        pais:'china',
       }
    }
    
}

const { nombre, informacion, informacion: {fabricacion, fabricacion:{pais}} } = producto;

console.log(nombre);
console.log(fabricacion);
console.log(pais);