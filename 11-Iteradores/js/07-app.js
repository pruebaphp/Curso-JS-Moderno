const pendientes = ['tarea','comer','Proyecto','Estudiar JavaScript'];

const carrito = [
    {nombre: 'Monitor de 30\'', precio:500},
    {nombre: 'Television\'', precio:300},
    {nombre: 'Tablet 15\'', precio:140,descuento:true},
    {nombre: 'Audifonos\'', precio:250},
    {nombre: 'Teclado\'', precio:300},
    {nombre: 'Celar\'', precio:153},

]
//for of
for(let pendiente of pendientes){
    console.log(pendiente);
}