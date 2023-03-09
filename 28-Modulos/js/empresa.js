import {Cliente} from './cliente.js';

export class Empresa extends Cliente{

    constructor(nombre,ahorro,categoria){
        super(nombre,ahorro);
        this.categoria = categoria;
    }

    mostrarInformacion(){
        console.log(`El nombre es: ${this.nombre}  y su ahorro es:: ${this.ahorro} y categoria ::: ${this.categoria}`);
    }

}