// (function(){

//     let DB;
//     const formulario = document.querySelector('#formulario');


//     window.onload = ()=>{
//         conectarDB();
//         eventListener();
//     }

//     function eventListener(){
//         formulario.addEventListener('submit',validarCliente);
//     }


//     function conectarDB(){
//         const abrirConexion = window.indexedDB.open('crm',1);

//         abrirConexion.onerror = function(){
//             console.log('Hubo un error');
//         }

//         abrirConexion.onsuccess  = function(){
//             console.log('Si te conectasTEE');
//             DB = abrirConexion.result;
//         }
//     }

//     function validarCliente(e){
//         e.preventDefault();
//         console.log('Validando...');

//         //Leer todos los imputs

//         const nombre = document.querySelector('#nombre').value;
//         const email = document.querySelector('#email').value;
//         const telefono = document.querySelector('#telefono').value;
//         const empresa = document.querySelector('#empresa').value;
        
//         if(nombre==="" || email === "" || telefono === "" || empresa === ""){
//             imprimirAlerta('Todos los campos son obligatorios','error');
//             return;
//         }
        
//         if(!validarEmail(email)){
//             imprimirAlerta('Ingrese un correo válido.','error');
//             return;
//         }

//         if(isNaN(telefono) || telefono.length !== 9){
//             imprimirAlerta('Ingrese un teléfono válido.','error');
//             return;
//         }



//         let clienteObjeto = {
//             nombre,
//             email,
//             telefono,
//             empresa,
//             id: Date.now(),
//         }

//         console.log(clienteObjeto);

//         crearNuevoCliente(clienteObjeto);



//     }

//     function crearNuevoCliente(clienteObjeto){
//                 //Agregar nuevo registro a la base de datos
//                 const transaction = DB.transaction(['crm'],'readwrite');
//                 const objectStore = transaction.objectStore('crm');
        
//                 objectStore.add(clienteObjeto);

        
//                 transaction.onerror = function(){
//                     console.log('El email ya existe, intente con otro');
//                     imprimirAlerta('El email ya existe, intente con otro','error');
//                 }

//                 transaction.oncomplete = function(){
//                     console.log('Cliente agregado');
//                     imprimirAlerta('Cliente agregado correctamente','success');

//                     setTimeout(() => {
//                         formulario.reset();
//                         window.location = 'index.html';
//                     }, 2500);
//                 }
//     }

//     function validarEmail(email){
//         const expRegular =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
//         let resultado = expRegular.test(email);
//         return resultado;

//     }

//     function imprimirAlerta(mensaje,tipo){

//         if(document.querySelector('.mensajeAlerta')){
//             document.querySelector('.mensajeAlerta').remove();
//         }

//         const divMensaje = document.createElement('div');
//         divMensaje.textContent = mensaje;
//         divMensaje.classList.add('px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center','mensajeAlerta','border');

//         if(tipo==="error"){
//             divMensaje.classList.add('bg-red-100','border-red-400','text-red-700');
//         }else{
//             divMensaje.classList.add('bg-gree-100','border-green-400','text-green-700');
//         }

//         formulario.appendChild(divMensaje);

//         setTimeout(() => {
//             divMensaje.remove();
//         }, 3000);
//     }

// })();

(function(){

    //variables
    let formulario = document.querySelector('#formulario');
    let nombre = document.querySelector('#nombre');
    let correo = document.querySelector('#email');
    let telefono = document.querySelector('#telefono');
    let empresa = document.querySelector('#empresa');

    window.onload = ()=>{
        conectarDB();
        eventListeners();
       
    }

    function eventListeners(){
        formulario.addEventListener('submit',agregarCliente);
    }

    function agregarCliente(e){
        e.preventDefault();
        if(nombre.value===""||correo.value===""||telefono.value===""||empresa.value===""){
           // console.log('Todos los campos son obligatorios');
           
           mostrarMensaje(`Todos los campos son obligatorios.`,`error`);
            return;
        }

        if(!verificarCorreo(correo.value.trim())){
            mostrarMensaje(`Ingrese un correo válido.`,`error`);
            return;
        }

        if(isNaN(telefono.value) || telefono.value.length !== 9){
            mostrarMensaje(`Ingrese un teléfono válido`,`error`);
            return;
        }

        let clienteObjeto = {
            nombre: nombre.value,
            correo: correo.value,
            telefono: telefono.value,
            empresa: empresa.value,
            id: Date.now(),
        }

        agregarNuevoCliente(clienteObjeto);
    }
    function agregarNuevoCliente(cliente){
        const transaction = DB.transaction(['clientes'],'readwrite');
        const objectStore = transaction.objectStore('clientes');
        objectStore.add(cliente);

        transaction.oncomplete = ()=>{
            mostrarMensajeSuceso(`Cliente agregado correctamente`);
            formulario.querySelector('[type="submit"]').disabled = true;
            setTimeout(() => {
                formulario.reset();
                window.location = 'index.html';
            }, 3000);

        }

        transaction.onerror = ()=>{
            mostrarMensaje(`El correo ingresado ya existe.`,`error`);
        }

    }

    function mostrarMensajeSuceso(mensaje){

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${mensaje}`,
            showConfirmButton: false,
            timer: 2700,
            allowOutsideClick: false,

          })

          let sweet = document.querySelector('.swal2-title');
          sweet.style.fontSize = '22px';


    }

    function verificarCorreo(correo){
        exprRegular =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        let resultado = exprRegular.test(correo);
        return resultado;

    }

    function mostrarMensaje(mensaje,tipo,titulo='Oops...'){
        Swal.fire({
            icon: `${tipo}`,
            title: `${titulo}`,
            text: `${mensaje}`,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#267873',
            showCloseButton: true,
            focusConfirm: true,
            allowOutsideClick: false,

          })
    }

    function conectarDB(){
        const crearDB = window.indexedDB.open('clientes',1); 
        crearDB.onerror = ()=>{console.log('Hubo un error al crear la base de datos')}; 
        crearDB.onsuccess = ()=>{DB = crearDB.result}; 
    }




})();