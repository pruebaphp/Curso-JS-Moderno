function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function(){
   let tipo;

   if(this.saldo>10000){
    tipo='Gold';
   }else if(this.salido>5000){
    tipo = 'Platinum';
   }else{
    tipo = 'Normal';
   }
   return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}


Cliente.prototype.retiraSaldo = function(montoRetiro){
    this.saldo -= montoRetiro;
}

function Persona(nombre,saldo,telefono){
    
    //heredando las propiedades de Cliente
    Cliente.call(this,nombre,saldo);
    this.telefono = telefono;

}
//pasar todo el prototype de cliente a Persona
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

//Instanciando

const juan = new Persona('Juan',1800,15362223);
console.log(juan);
console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es ${this.telefono}`;
}

console.log(juan.mostrarTelefono());