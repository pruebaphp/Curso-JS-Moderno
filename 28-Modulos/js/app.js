//colocar el codigo en un IIFE, para que no se mezclen codigos con otros archivos js

// (function(){
//     console.log('Desde un IIFE');
//     //const nombreCliente = 'Juan';
//     window.nombreCliente = 'Juan';
// })();



import nuevaFuncion, { nombreCliente as nombrecito ,ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";


console.log(nombrecito);
console.log(ahorro);
console.log(mostrarInformacion('Juanito',5000));


tieneSaldo(9000);

let cliente = new Cliente('Pepe',8000);

console.log(cliente);
cliente.mostrarInformacion();

//Importar empresa



const empresa = new Empresa('Gloria',100,'Lacteos');
console.log(empresa);
empresa.mostrarInformacion();

nuevaFuncion();
