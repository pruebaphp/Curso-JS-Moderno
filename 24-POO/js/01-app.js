//class declaration
class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion(){
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida(){
        return console.log(`Bienvenido al cajero`);
    }
}
//instanciando la clase
const juan = new Cliente('Juan',400);

console.log(juan.mostrarInformacion());
Cliente.bienvenida();


//class expresion

const Cliente2 = class {
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion(){
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const juan2 = new Cliente2('Juan',400);
console.log(juan2.mostrarInformacion());