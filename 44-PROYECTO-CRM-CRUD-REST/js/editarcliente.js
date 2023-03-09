import { obtenerCliente,editarCliente } from "./API.js";
import { mostrarAlerta } from "./funciones.js";

(function(){

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded',()=>{

        const parametrosURL = new URLSearchParams(window.location.search);
        const id = Number(parametrosURL.get('id'));

        llenarFormulario(id);
        formulario.addEventListener('submit',validarCliente);

    });

     async function llenarFormulario(id){

      let clienteObj = await obtenerCliente(id);
      
      mostrarCliente(clienteObj);
       
    }

    function mostrarCliente(cliente){
        const {nombre,email,telefono,empresa,id} = cliente;

        const nombreInput = document.querySelector('#nombre');
        const emailInput = document.querySelector('#email');
        const telefonoInput = document.querySelector('#telefono');
        const empresaInput = document.querySelector('#empresa');
        const idInput = document.querySelector('#id');

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;
    }


    function validarCliente(e){
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
        const idInput = document.querySelector('#id').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            id:idInput,
        }

        if(Object.values(cliente).some(e=>e==="")){
            mostrarAlerta('Todos los campos son obligatorios.');
            return;
        }
        console.log(cliente);

        editarCliente(cliente);


    }

})();