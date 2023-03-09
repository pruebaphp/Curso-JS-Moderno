const cliente = new Map();

//Permite tener llave y valor
cliente.set('nombre','Karen');
cliente.set('tipo','premium');
cliente.set('saldo',3000);

console.log(cliente);

console.log(cliente.size);

console.log(cliente.has('nombre'));

console.log(cliente.get('tipo'));


cliente.delete('saldo');

console.log(cliente.has('saldo'));
console.log(cliente.get('saldo'));

cliente.clear();

console.log(cliente);


const paciente = new Map([['nombre','paciente'],['cuarto','no definido']]);

paciente.set('dr','dr Asignado');
paciente.set('nombre','dr paciente');

console.log(paciente);


paciente.forEach((datos,llave)=>{
    return console.log(llave);
})


