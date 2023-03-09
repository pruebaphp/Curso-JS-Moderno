//forEach

const pendientes = ['tarea','comer','Proyecto','Estudiar JavaScript'];

pendientes.forEach((e,indice)=>{
    console.log(`${indice}: ${e}`);
})


const carrito = [
    {nombre: 'Monitor de 30\'', precio:500},
    {nombre: 'Television\'', precio:300},
    {nombre: 'Tablet 15\'', precio:140,descuento:true},
    {nombre: 'Audifonos\'', precio:250},
    {nombre: 'Teclado\'', precio:300},
    {nombre: 'Celar\'', precio:153},

]

carrito.forEach(e=>console.log(e.nombre));

carrito.map(e=>console.log(e));
