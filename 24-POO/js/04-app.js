
class Cliente{
    //haciendo que sea privado el campo o atributo
    #nombre;

    constructor(nombre,saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Usuario ${this.#nombre}, tu saldo es ${this.saldo}`;
    }

    static mensajeBienvenida(){
        return ('Bienvenido al cajero');
    }
}

const juan = new Cliente('Juan',1500);

console.log(juan.mostrarInformacion());
console.log(juan.saldo);