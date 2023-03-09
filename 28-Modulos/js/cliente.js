export const nombreCliente = 'Juan';
export const ahorro = 200;

export function mostrarInformacion(nombre,ahorro){
    return `Cliente ${nombre} , ahorro ${ahorro}`;
}

export function tieneSaldo(ahorro){
    if(ahorro>0){
        console.log('Si tiene saldo');
    }else{
        console.log('No tiene saldo');
    }
}


export class Cliente {
    constructor(nombre,ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        console.log(`El nombre es: ${this.nombre}  y su ahorro es:: ${this.ahorro}`);
    }
}

export default function nuevaFuncion(){
    console.log('Este es el export default');
}