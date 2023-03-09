const pendientes = ['tarea','comer','Proyecto','Estudiar JavaScript'];
const automovil = {
    modelo: 'carro',
    año: '1998',
    motor: '6.0',
}

for(pendiente in automovil){
    console.log(`${automovil[pendiente]}`);
}

for(let[llave, valor] of Object.entries(automovil)){
    console.log(valor);
}

