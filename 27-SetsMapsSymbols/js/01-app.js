const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
//El set no tiene valores repetidos
//carrito.add('camisa'); 

carrito.delete('Disco #2');

console.log(carrito.has('Camisa'));

//Para saber cuanto mide el Set
console.log(carrito.size);

//Para limpiar el set

//carrito.clear();

carrito.forEach((e,index,pertenece)=>{
    console.log(e);
    console.log(index);
    console.log(pertenece);
})

console.log(carrito);

//Del siguiente arreglo eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];

console.log(numeros.indexOf(20));

let noDuplicados = numeros.filter((valor,indice)=>{
    console.log(`Esto ${numeros.indexOf(valor)} es igual a esto ${indice}`);
    if(numeros.indexOf(valor) === indice){
        return valor;
    } 

});

console.log(noDuplicados);


const noDuplicados2 = new Set(numeros);

console.log(noDuplicados2);