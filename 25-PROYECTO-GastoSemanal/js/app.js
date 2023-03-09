
let valor = prompt('Ingresa un numero','');
let formulario = document.querySelector('#agregar-gasto');
let listaGastos = [];


class Gasto{
    constructor(nombre,cantidad,id){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.id = id;
    }

    calcularNuevoRestante(){
        valor -= this.cantidad;
        return valor;
    }

    insertarDatosArray(){
        let valores = {
            nombre: this.nombre,
            cantidad: this.cantidad,
            id: this.id,
        }

        listaGastos.push(valores);
        console.log(listaGastos);
    }

    
}

class UI{
    comprobarPrompt(valor){
        if(validarNumero(valor)===false){
            location.reload();
        }
    }
    actualizarRestante(restante){

        let restanteHTML = document.querySelector('#restante');
        restanteHTML.textContent = `${restante}`;

    }

    crearHTMLlistado(){

        let ul = document.querySelector('.list-group');

        ul.innerHTML = ``;

        listaGastos.forEach(e=>{
            let li = document.createElement('li');
            li.innerHTML = `${e.nombre} ${e.cantidad} ${e.id}`;
            ul.appendChild(li);
        });
        

    }

    crearPresupuestoyRestante(presupuesto){
        let presupuestoHTML = document.querySelector('#total');
        let restanteHTML = document.querySelector('#restante');
        restanteHTML.textContent = `${presupuesto}`; 
        presupuestoHTML.textContent = `${presupuesto}`;
    }
}

//Event Listener

eventListeners();

function eventListeners(){
    formulario.addEventListener('submit',actualizarRestante);
    document.addEventListener('DOMContentLoaded',crearPresupuestoyRestante);
}



let ui = new UI();
ui.comprobarPrompt(valor);



function crearPresupuestoyRestante(){
    ui.crearPresupuestoyRestante(valor);
}

function actualizarRestante(e){
    e.preventDefault();
    let cantidadAgregada = document.querySelector('#cantidad').value;
    let nombreGasto = document.querySelector('#gasto').value;
    let id = Date.now();
    let gasto = new Gasto(nombreGasto,cantidadAgregada,id);
    let nuevoRestante = gasto.calcularNuevoRestante();
    console.log(nuevoRestante);
    ui.actualizarRestante(nuevoRestante);
    gasto.insertarDatosArray();
    ui.crearHTMLlistado()
    formulario.reset();
   

    

}


function validarNumero(valor){
 var expresionRegular= "^[0-9]+$";
 let resultado=true;
 if(valor.match(expresionRegular)===null || parseInt(valor)<=0){
   resultado = false;
 }
 return resultado;
}




