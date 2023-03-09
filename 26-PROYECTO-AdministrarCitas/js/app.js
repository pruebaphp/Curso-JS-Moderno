
let formulario = document.querySelector('#nueva-cita');
let contenedorCitas = document.querySelector('#citas');

let editando = false;


class Citas{
    constructor(){
        this.citas = [];
    }

    agregarCita(citaObj){
        this.citas.push(citaObj);
        console.log(this.citas);
    }

    borrarCita(id){
        this.citas = this.citas.filter(e=>e.id !== id);
    }

    editarCita(idCita){
        console.log(idCita);
        this.citas = this.citas.map(e=>{
            if(e.id === idCita){
               console.log(' ID ENCONTRADO ');
               //console.log(e);
                e.mascota = document.querySelector('#mascota').value 
                e.propietario = document.querySelector('#propietario').value 
                e.telefono = document.querySelector('#telefono').value 
                e.fecha = document.querySelector('#fecha').value 
                e.hora = document.querySelector('#hora').value
                e.sintomas = document.querySelector('#sintomas').value

                //console.log(e);
                return e;
            }else{
                return e;
            }
        });
        console.log(this.citas);
    }
}

class UI{
    mostrarAlerta(mensaje,tipo){
        
        if(document.querySelector('.mensajeAlerta')){
            document.querySelector('.mensajeAlerta').remove();
            console.log('Si existe');
         }else{
            console.log('NO existe');
         }

        let divMensaje = document.createElement('div');
        divMensaje.textContent = mensaje;
        divMensaje.classList.add('text-center','alert', 'col-12' ,'mensajeAlerta');

        if(tipo==="error"){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

       
         document.querySelector('#contenido').insertBefore(divMensaje,document.querySelector('.agregar-cita'));
        

       // console.log(formulario.children[0]);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
        
    }

    mostrarCitas(arregloCitas){

        contenedorCitas.innerHTML = ``;

       arregloCitas.forEach(e => {
            let divCita = document.createElement('div');
            divCita.classList.add('cita','p-3');
            divCita.setAttribute('data-id',e.id);

            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = e.mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span>${e.propietario}`

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Telefono: </span>${e.telefono}`

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span>${e.fecha}`
            
            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `<span class="font-weight-bolder">hora: </span>${e.hora}`

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Sintomas: </span>${e.sintomas}`

            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn','btn-danger','borrar-gasto', 'mr-2');
            btnBorrar.innerHTML = 'Borrar &times';
            btnBorrar.setAttribute('data-id',e.id);
            btnBorrar.onclick = function(){
                eliminarCita(e.id);
            }

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn','btn-warning','editar-gasto');
            btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          `;
            btnEditar.onclick = function(){
                cargarCita(e);
            }

            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnBorrar);
            divCita.appendChild(btnEditar);

            //agregar las citas al html
            contenedorCitas.appendChild(divCita);

       });
    }

    actualizarTitulo(arregloCitas){
        if(arregloCitas.length>0){
            document.querySelector('.mensajeTitulo').textContent = 'Empieza a administrar tus citas';
            document.querySelector('.mensajeTitulo').classList.remove('alert-warning');
            document.querySelector('.mensajeTitulo').classList.add('alert-info');
        }else{
            document.querySelector('.mensajeTitulo').textContent = 'No hay citas, comienza creando una';
            document.querySelector('.mensajeTitulo').classList.add('alert-warning');
            document.querySelector('.mensajeTitulo').classList.remove('alert-info');
        }
    }

}

let citaObjeto = new Citas();
let uiObjeto = new UI();

eventListeners();

function eventListeners(){
    formulario.addEventListener('submit',crearCita);
    
}

function crearCita(e){

    e.preventDefault();

    let mascota = document.querySelector('#mascota').value;
    let propietario = document.querySelector('#propietario').value;
    let telefono = document.querySelector('#telefono').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let sintomas = document.querySelector('#sintomas').value;

    if(mascota==="" || propietario ==="" || telefono === "" || fecha === "" || hora ==="" || sintomas===""){
        uiObjeto.mostrarAlerta('Todos los campos son obligatorios','error');
        return;
    }

    if(isNaN(telefono) || telefono.length!==9){
        uiObjeto.mostrarAlerta('Ingrese un telefono válido','error');
        return;
    }

    let cita = { 
        mascota,
        propietario,
        telefono,
        fecha,
        hora,
        sintomas,
        id: Date.now(),
    }

    if(editando===true){
        console.log('Modo editando...');
        citaObjeto.editarCita(Number(document.querySelector('#idcita').value));
        uiObjeto.mostrarAlerta(`Se editó correctamente`);
        formulario.querySelector('button[type="submit"]').textContent = "Crear cita";
        editando = false;
    }else{
        console.log('Modo agregando...');
        citaObjeto.agregarCita(cita);
        uiObjeto.mostrarAlerta(`Se agregó correctamente`);
        
    }


    formulario.reset();
    console.log(citaObjeto.citas);
    uiObjeto.mostrarCitas(citaObjeto.citas);
    uiObjeto.actualizarTitulo(citaObjeto.citas);

}

function eliminarCita(id){
    citaObjeto.borrarCita(id);
    uiObjeto.mostrarAlerta(`Cita eliminada correctamente`);
    uiObjeto.mostrarCitas(citaObjeto.citas);
    uiObjeto.actualizarTitulo(citaObjeto.citas);
    console.log(citaObjeto.citas);
}

function cargarCita(citaObj){

    document.querySelector('#mascota').value = citaObj.mascota;
    document.querySelector('#propietario').value = citaObj.propietario;
    document.querySelector('#telefono').value = citaObj.telefono;
    document.querySelector('#fecha').value = citaObj.fecha;
    document.querySelector('#hora').value = citaObj.hora;
    document.querySelector('#sintomas').value = citaObj.sintomas;
    document.querySelector('#idcita').value = citaObj.id;

    editando = true;

    formulario.querySelector('button[type="submit"]').textContent = "Guardar cambios";
    
}

