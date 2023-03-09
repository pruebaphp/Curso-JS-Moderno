const producto = {
    nombre: 'Televisor de 30 pulgadas\'',
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m',
}


console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto,medidas);

//Spread Operato o Rest Operator

const resultado2 = {...producto,...medidas}

console.log(resultado);
console.log(resultado2);