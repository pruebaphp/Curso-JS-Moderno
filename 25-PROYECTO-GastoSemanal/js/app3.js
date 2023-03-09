// let formulario  = document.querySelector('#agregar-gasto');
// let gastoListado = document.querySelector('#gastos .list-group');
// let divGastos = document.querySelector('#gastos');


// class Presupuesto{
//     constructor(presupuesto){
//         this.presupuesto = presupuesto;
//         this.restante = presupuesto;
//         this.arregloGastos= [];
//     }

//     nuevoGasto(nuevoGastoObj){
//         this.arregloGastos.push(nuevoGastoObj);
//     }

//     calcularRestante(){
//         let gastado = 0;
//         this.arregloGastos.forEach(e=>{
//             gastado = gastado + e.cantidad;
//         });
//         console.log(`LO GASTADO ES : ${gastado}`);
//         this.restante = this.presupuesto - gastado;
//     }

//     eliminarGasto(id){
//         this.arregloGastos.forEach(e=>{
//             if(e.id === id){
//                 this.restante += e.cantidad;
//             };
//         });

//         this.arregloGastos = this.arregloGastos.filter(e=>e.id!==id);

//     }

// }

// class UI{
//     asignarPresupuesto(presupuestoObj){
//         const {presupuesto,restante} = presupuestoObj;
//          document.querySelector('#total').textContent = presupuesto;
//          document.querySelector('#restante').textContent = restante;
//          console.log(restante);

//     }

//     mostrarAlerta(mensaje,tipo){
//         let divMensaje = document.createElement('div');
//         divMensaje.textContent = mensaje;
//         divMensaje.classList.add('alert','mensajeAlerta');

//         if(tipo === "error"){
//             divMensaje.classList.add('alert-danger');
//         }else{
//             divMensaje.classList.add('alert-success');
//         }

//         if(document.querySelector('.mensajeAlerta')){
//             divMensaje.remove();
//         }else{
//             //Insertar en el HTML
//             document.querySelector('.primario').insertBefore(divMensaje,formulario);
//         }

//         setTimeout(() => {
//             divMensaje.remove();
//         }, 2500);
       
//     }

//     actualizarRestante(presupuestoObj){
//         document.querySelector('#restante').textContent = presupuestoObj.restante;
    
//     }

//     generarListado(gastos){

//         gastoListado.innerHTML = ``;

//             gastos.forEach(gasto => {
//                 const {cantidad,nombre,id} = gasto;
//                 //crear un li
//                 let nuevoGasto = document.createElement('li');
//                 nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
//                 nuevoGasto.setAttribute('data-id',id);
    
//                 //Agregar el html del gasto
//                 nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">${cantidad}</span>`;
    
//                 const btnBorrar = document.createElement('button');
//                 btnBorrar.classList.add('btn','btn-danger','borrar-gasto');
//                 btnBorrar.innerHTML = 'Borrar &times';
//                 nuevoGasto.appendChild(btnBorrar);
    
//                 gastoListado.appendChild(nuevoGasto);
//             });
      
//     }

//     comprobarPresupuesto(presupuestoObj){
//         const {presupuesto,restante} = presupuestoObj;
//         const restanteDiv = document.querySelector('.restante');
//         restanteDiv.classList.remove('alert-danger','alert-warning');
//         restanteDiv.classList.add('alert-success');
       
//         if((presupuesto/4)>restante){
//             restanteDiv.classList.remove('alert-success', 'alert-warning');
//             restanteDiv.classList.add('alert-danger');
//         }else if((presupuesto/2)>restante){
//             restanteDiv.classList.remove('alert-success');
//             restanteDiv.classList.add('alert-warning');
//         }

//         if(Number(restante)<=0){
//           //  ui.imprimirAlerta('El presupuesto se ha agotado','error');
//             formulario.querySelector('button[type="submit"]').disabled = true;

//         }

//     }
// }


// let ui = new UI();
// let presupuestoObj;


// eventListener();

// function eventListener(){
//     document.addEventListener('DOMContentLoaded',pedirPresupuesto);
//     formulario.addEventListener('submit',agregarGasto);
//     divGastos.addEventListener('click',eliminarGasto);
// }

// function pedirPresupuesto(){
//     let presupuestoUsuario = prompt('¿Cuál es su presupuesto?');
//     console.log(presupuestoUsuario);
//     if(presupuestoUsuario === "" || isNaN(presupuestoUsuario) || presupuestoUsuario===null || presupuestoUsuario<=0){
//         console.log("No pasaste la prueba");
//         window.location.reload();
//         return;
//     }
//         presupuestoObj = new Presupuesto(presupuestoUsuario);
//         ui.asignarPresupuesto(presupuestoObj);
// }

// function agregarGasto(e){
//     e.preventDefault();
//     let nombreGasto = document.querySelector('#gasto').value;
//     let cantidadGasto = document.querySelector('#cantidad').value;
//     let campoRestante = document.querySelector('#restante').textContent;

//     if(nombreGasto==="" || cantidadGasto ===""){
//         ui.mostrarAlerta(`Todos los campos son obligatorios`,'error');
//         return;
//     }
//     if(isNaN(cantidadGasto) || cantidadGasto<=0){
//         ui.mostrarAlerta(`Ingrese una cantidad válida`,'error');
//         return;
//     }

//     if(Number(cantidadGasto)>Number(campoRestante)){
//         ui.mostrarAlerta(`La cantidad es mayor a su dinero restante.`,'error');
//         return;
//     }

//     //Creando objetoNuevoGasto
//     let objetoGasto = {
//         nombre:nombreGasto,
//         cantidad:Number(cantidadGasto),
//         id: Date.now(),
//     }

//     presupuestoObj.nuevoGasto(objetoGasto);
//     console.log(presupuestoObj);
//     presupuestoObj.calcularRestante();
//     console.log(`Este es el restante ${presupuestoObj.restante}`);
//     console.log(presupuestoObj.arregloGastos);
//     ui.actualizarRestante(presupuestoObj);
//     ui.generarListado(presupuestoObj.arregloGastos);
//     ui.comprobarPresupuesto(presupuestoObj);
//     formulario.reset();

// }

// function eliminarGasto(e){
//    id = (Number(e.target.parentElement.getAttribute('data-id')));
//    presupuestoObj.eliminarGasto(id);
//    ui.actualizarRestante(presupuestoObj);
//    ui.generarListado(presupuestoObj.arregloGastos);
//    ui.comprobarPresupuesto(presupuestoObj);
// }

/*---------------CON LOCAL STORAGE--------------*/

let formulario  = document.querySelector('#agregar-gasto');
let gastoListado = document.querySelector('#gastos .list-group');
let divGastos = document.querySelector('#gastos');


class Presupuesto{
    constructor(presupuesto,ArregloGastos){
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
        this.arregloGastos = ArregloGastos;
    }

    nuevoGasto(nuevoGastoObj){
        this.arregloGastos.push(nuevoGastoObj);
    }

    calcularRestante(){
        let gastado = 0;
        this.arregloGastos.forEach(e=>{
            gastado = gastado + e.cantidad;
        });
        console.log(`LO GASTADO ES : ${gastado}`);
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){
        this.arregloGastos.forEach(e=>{
            if(e.id === id){
                this.restante += e.cantidad;
            };
        });

        this.arregloGastos = this.arregloGastos.filter(e=>e.id!==id);

    }

}

class UI{
    asignarPresupuesto(presupuestoObj){
        const {presupuesto,restante} = presupuestoObj;
         document.querySelector('#total').textContent = presupuesto;
         document.querySelector('#restante').textContent = restante;
         console.log(restante);

    }

    mostrarAlerta(mensaje,tipo){
        let divMensaje = document.createElement('div');
        divMensaje.textContent = mensaje;
        divMensaje.classList.add('alert','mensajeAlerta');

        if(tipo === "error"){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        if(document.querySelector('.mensajeAlerta')){
            divMensaje.remove();
        }else{
            //Insertar en el HTML
            document.querySelector('.primario').insertBefore(divMensaje,formulario);
        }

        setTimeout(() => {
            divMensaje.remove();
        }, 2500);
       
    }

    actualizarRestante(presupuestoObj){
        document.querySelector('#restante').textContent = presupuestoObj.restante;
    
    }

    generarListado(gastos){

        gastoListado.innerHTML = ``;

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
            });

            this.sincronizarStorage(gastos);
      
    }

    sincronizarStorage(gastos){
        localStorage.setItem('ArregloGastos',JSON.stringify(gastos));
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

        if(Number(restante)<=0){
           // this.mostrarAlerta('El presupuesto se ha agotado','error');
            formulario.querySelector('button[type="submit"]').disabled = true;

        }

    }
}


let ui = new UI();
let presupuestoObj;


eventListener();

function eventListener(){
    document.addEventListener('DOMContentLoaded',pedirPresupuesto);
    formulario.addEventListener('submit',agregarGasto);
    divGastos.addEventListener('click',eliminarGasto);
}

function pedirPresupuesto(){
    let presupuestoUsuario = prompt('¿Cuál es su presupuesto?');
    console.log(presupuestoUsuario);
    if(presupuestoUsuario === "" || isNaN(presupuestoUsuario) || presupuestoUsuario===null || presupuestoUsuario<=0){
        console.log("No pasaste la prueba");
        window.location.reload();
        return;
    }


    let ArregloGastos = JSON.parse(localStorage.getItem('ArregloGastos')) || [];
    
        presupuestoObj = new Presupuesto(presupuestoUsuario,ArregloGastos);

        ui.generarListado(presupuestoObj.arregloGastos);
        presupuestoObj.calcularRestante();
        ui.actualizarRestante(presupuestoObj);
        ui.asignarPresupuesto(presupuestoObj);
        ui.comprobarPresupuesto(presupuestoObj);
        console.log(presupuestoObj.restante);
        console.log(typeof presupuestoObj.restante);
}

function agregarGasto(e){
    e.preventDefault();
    let nombreGasto = document.querySelector('#gasto').value;
    let cantidadGasto = document.querySelector('#cantidad').value;
    let campoRestante = document.querySelector('#restante').textContent;

    if(nombreGasto==="" || cantidadGasto ===""){
        ui.mostrarAlerta(`Todos los campos son obligatorios`,'error');
        return;
    }
    if(isNaN(cantidadGasto) || cantidadGasto<=0){
        ui.mostrarAlerta(`Ingrese una cantidad válida`,'error');
        return;
    }

    if(Number(cantidadGasto)>Number(campoRestante)){
        ui.mostrarAlerta(`La cantidad es mayor a su dinero restante.`,'error');
        return;
    }

    //Creando objetoNuevoGasto
    let objetoGasto = {
        nombre:nombreGasto,
        cantidad:Number(cantidadGasto),
        id: Date.now(),
    }

    ui.mostrarAlerta(`Gasto asignado correctamente.`);
    presupuestoObj.nuevoGasto(objetoGasto);
    console.log(presupuestoObj);
    presupuestoObj.calcularRestante();
    console.log(`Este es el restante ${presupuestoObj.restante}`);
    console.log(presupuestoObj.arregloGastos);
    ui.actualizarRestante(presupuestoObj);
    ui.generarListado(presupuestoObj.arregloGastos);
    ui.comprobarPresupuesto(presupuestoObj);
    formulario.reset();

}

function eliminarGasto(e){
   id = (Number(e.target.parentElement.getAttribute('data-id')));
   presupuestoObj.eliminarGasto(id);
   ui.actualizarRestante(presupuestoObj);
   ui.generarListado(presupuestoObj.arregloGastos);
   ui.comprobarPresupuesto(presupuestoObj);
}