
class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Usuario ${this.nombre}, tu saldo es ${this.saldo}`;
    }

    static mensajeBienvenida(){
        return ('Bienvenido al cajero');
    }
}

//Herencia 
class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,categoria){
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria = categoria
    }

    static mensajeBienvenida(){ //reescribiendo un método
        return `Bienvenido al cajero de empresas`;
    }
}


const juan = new Cliente('Juan',1500);
const empresa = new Empresa('Samsung',1800,9596262,'Monitores');
console.log(Empresa.mensajeBienvenida());
console.log(Cliente.mensajeBienvenida());
console.log(empresa.mostrarInformacion());