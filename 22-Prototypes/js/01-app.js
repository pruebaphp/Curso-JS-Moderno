
const cliente = {
    nombre : 'Juanito',
    edad : 20,
}

console.log(cliente);

function cliente2 (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

let clientee = new cliente2('Pedro',63);

console.log(clientee);