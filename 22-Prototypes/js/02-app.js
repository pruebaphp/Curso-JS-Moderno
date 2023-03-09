function Cliente (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

let pedro = new Cliente('Pedro',63);

console.log(pedro);

function formatearCliente(cliente){
    return `El cliente ${cliente.nombre} tiene una edad de ${cliente.edad}`;
}

function formatearEmpresa(cliente){
    const {nombre,saldo,categoria} = cliente
    return `La empresa ${nombre} asigna un sueldo de ${saldo} y es de la categoria de ${categoria}`;
}

console.log(formatearCliente(pedro));

function Empresa (nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const gloria = new Empresa('Gloria',1500,'lacteos');

console.log(formatearEmpresa(gloria));

