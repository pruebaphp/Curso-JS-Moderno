//Weakset

const weakset = new WeakSet();

//Solo se le puede agregar objetos

const cliente = {
    nombre:'Juan',
    saldo: 100,
}



weakset.add(cliente);

console.log(weakset.has(cliente));

weakset.delete(cliente);

//no existe el .size
//No es iterable, no se puede usar el foreach


console.log(weakset);