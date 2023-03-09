let formulario = document.querySelector('#agregar-gasto');
let gastoListado = document.querySelector('#gastos .list-group');



//event Listener

eventListener();

function eventListener(){
    document.addEventListener('DOMContentLoaded',preguntarPresupuesto)
    formulario.addEventListener('submit',agregarGasto);
    gastoListado.addEventListener('click',eliminarGasto);
}


class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos.push(gasto);
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total,gasto)=>total+gasto.cantidad,0);
        this.restante = this.presupuesto - gastado;
        console.log(this.restante);
    }

    borrarGasto(id){
        this.gastos.forEach(e=>{
            if(e.id === id){
                this.restante += e.cantidad;
            }
        })
        this.gastos = this.gastos.filter(e=>e.id !== id);
    }
}

class UI{
    insertarPresupuesto(cantidad){
        document.querySelector('#total').textContent = cantidad.presupuesto;
        document.querySelector('#restante').textContent = cantidad.restante;
    }
    imprimirAlerta(mensaje,tipo){
        //crear el div
        const divMensaje = document.createElement('div');
        divMensaje.textContent = mensaje;
        divMensaje.classList.add('text-center','alert','mensajeAlerta');

        if(tipo === "error"){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        //Insertar en el HTML
        if(document.querySelector('.mensajeAlerta')){
            divMensaje.remove();
        }else{
            document.querySelector('.primario').insertBefore(divMensaje,formulario);
       }
      
        setTimeout(() => {
            divMensaje.remove();
        }, 2500);
    }

    agregarGastoListado(gastos){
        gastoListado.innerHTML='';
        gastos.forEach(gasto => {
            const {cantidad,nombre,id} = gasto;
            //crear un li
            let nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.setAttribute('data-id',id);

            //Agregar el html del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">${cantidad}</span>`;

            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn','btn-danger','borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times';
            nuevoGasto.appendChild(btnBorrar);

            gastoListado.appendChild(nuevoGasto);
        })
    }

    acttualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto,restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');
        restanteDiv.classList.remove('alert-danger','alert-warning');
        restanteDiv.classList.add('alert-success');
       
        if((presupuesto/4)>restante){
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        }else if((presupuesto/2)>restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        }

        if(restante<=0){
            ui.imprimirAlerta('El presupuesto se ha agotado','error');
            formulario.querySelector('button[type="submit"]').disabled = true;

        }

    }
}

let ui = new UI();
let presupuesto;

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
    console.log(presupuestoUsuario);

    if(presupuestoUsuario===null || presupuestoUsuario ==="" || presupuestoUsuario <=0 || isNaN(presupuestoUsuario)){
        window.location.reload();
        return;
    }

    presupuesto = new Presupuesto(presupuestoUsuario);
   // console.log(presupuesto);
   ui.insertarPresupuesto(presupuesto);
    //Presupuesto válido
}

function agregarGasto(e){
    e.preventDefault();
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = Number(document.querySelector('#cantidad').value);
    const restante = Number(document.querySelector('#restante').textContent);

    if(nombreGasto==="" || cantidadGasto===""){
        ui.imprimirAlerta(`Ambos campos son obligatorios`,'error');
        return;
    }

    if( isNaN(cantidadGasto) || cantidadGasto<=0 ){
        ui.imprimirAlerta(`Cantidad no válida.`,'error');
        return;
    }

    console.log(cantidadGasto);
    console.log(restante);

    if(cantidadGasto>restante){
        ui.imprimirAlerta(`La cantidad supera a tu restante actual`,'error');
        return;
    }

    const gasto = {
        nombre: nombreGasto,
        cantidad: cantidadGasto,
        id : Date.now(),
    }

    //añade nuevo gasto
 

    presupuesto.nuevoGasto(gasto);

    ui.imprimirAlerta(`Gasto agregado correctamente`);

    //imprimir los gastos
    ui.agregarGastoListado(presupuesto.gastos);
    ui.acttualizarRestante(presupuesto.restante);
    ui.comprobarPresupuesto(presupuesto);
    //limpiar el formulario

    formulario.reset();

    console.log(gasto);
}


function eliminarGasto(e){
    if(e.target.classList.contains('borrar-gasto')){
        id = (e.target.parentElement.getAttribute('data-id'));
        console.log(Number(id));
        presupuesto.borrarGasto(Number(id));
        console.log(presupuesto.gastos);
        ui.agregarGastoListado(presupuesto.gastos);
        ui.acttualizarRestante(presupuesto.restante);
        ui.comprobarPresupuesto(presupuesto);

    };
}