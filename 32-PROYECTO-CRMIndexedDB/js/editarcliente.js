// (function(){

//     let DB;

//     const nombreInput = document.querySelector('#nombre');
//     const emailInput = document.querySelector('#email');
//     const telefonoInput = document.querySelector('#telefono');
//     const empresaInput = document.querySelector('#empresa');
//     const formulario = document.querySelector('#formulario');
//     let idCliente;

// window.onload = ()=>{
//     conectarDB();


//     //Verificar el ID de la URL

//     const parametrosURL = new URLSearchParams(window.location.search);
    
//      idCliente =  parametrosURL.get('id');

//     //console.log(idCliente);
//     let respuesta=false;

//     if(idCliente){
//         setTimeout(() => {
            
//             const objectStore = DB.transaction('crm').objectStore('crm');
//             objectStore.openCursor().onsuccess = (e)=>{
    
//                 const cursor = e.target.result;
    
//                 if(cursor){
//                     if(cursor.value.id === Number(idCliente)){
//                         //console.log(cursor.value.id)
//                        // alert(`Si se encontro el id nmro ${cursor.value.id} y el idcliente ${Number(idCliente)}`);
//                         respuesta = true;
                        
//                     }
//                     cursor.continue();
//                 }
    
//             }
//         }, 100);

 
//     }else{
//         window.location = 'index.html';
//     }
//     //console.log(respuesta);

    

    
// setTimeout(() => {
//     if(respuesta===true){
//         obtenerCliente(idCliente);
//     }else{
//         window.location = 'index.html';
//     }
// }, 120);


//     formulario.addEventListener('submit',editarCliente);

// }

// function editarCliente(e){

//     e.preventDefault();

//     if(nombreInput.value==="" || emailInput.value === "" || telefonoInput.value === "" || empresaInput.value === ""){
      
//         imprimirAlerta('Todos los campos son obligatorios','error');
//         return;
//     }
    
//     if(!validarEmail(emailInput.value)){
//         imprimirAlerta('Ingrese un correo válido.','error');
//         return;
//     }

//     if(isNaN(telefonoInput.value) || telefonoInput.value.length !== 9){
//         imprimirAlerta('Ingrese un teléfono válido.','error');
//         return;
//     }





//     let clienteObjeto = {
//         nombre : nombreInput.value,
//         email : email.value,
//         empresa: empresaInput.value,
//         telefono: telefonoInput.value,
//         id: Number(idCliente),
//     }

//     const transaction = DB.transaction(['crm'],'readwrite');
//     const objectStore = transaction.objectStore('crm');

//     objectStore.put(clienteObjeto);

//     transaction.oncomplete = ()=>{
//         imprimirAlerta('Se editó correctamente.');
//         console.log('Editado correctamente');
//         setTimeout(() => {
//             window.location = "index.html";
//         }, 2000);
       
//     }

    
// }


// function imprimirAlerta(mensaje,tipo){

// if(document.querySelector('.mensajeAlerta')){
// document.querySelector('.mensajeAlerta').remove();
// }

// const divMensaje = document.createElement('div');
// divMensaje.textContent = mensaje;
// divMensaje.classList.add('px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center','mensajeAlerta','border');

// if(tipo==="error"){
// divMensaje.classList.add('bg-red-100','border-red-400','text-red-700');
// }else{
// divMensaje.classList.add('bg-gree-100','border-green-400','text-green-700');
// }

// formulario.appendChild(divMensaje);

// setTimeout(() => {
// divMensaje.remove();
// }, 3000);
// }

// function validarEmail(email){
//     const expRegular =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
//     let resultado = expRegular.test(email);
//     return resultado;

// }

// function obtenerCliente(id){
// setTimeout(() => {
//     //Obtener el cliente
//     /*const transaction = DB.transaction(['crm'],'readwrite');
//     const objectStore = transaction.objectStore('crm');*/
//     const objectStore = DB.transaction('crm').objectStore('crm');

//    objectStore.openCursor().onsuccess = (e)=>{
//         const cursor = e.target.result;
//         if(cursor){
            
//             if(cursor.value.id===Number(id)){
//                 llenarFormulario(cursor.value);
//             }

//             cursor.continue();
//         }
//     }
//     console.log(objectStore);
// }, 100);
// }

// function llenarFormulario(datosCliente){
//     const {nombre,empresa,email,telefono,id} = datosCliente;

//     nombreInput.value = nombre;
//     emailInput.value = email;
//     empresaInput.value = empresa;
//     telefonoInput.value = telefono;
// }

// function conectarDB(){
//     const abrirConexion = window.indexedDB.open('crm',1);

//     abrirConexion.onsuccess = ()=>{
//         DB = abrirConexion.result;
//     }
// }

// })();

(function(){

    let idCliente;
    let DB;

        //variables
        let formulario = document.querySelector('#formulario');
        let nombre = document.querySelector('#nombre');
        let correo = document.querySelector('#email');
        let telefono = document.querySelector('#telefono');
        let empresa = document.querySelector('#empresa');

    window.onload = ()=>{
        obtenerIdCliente();
        cargarDatos(idCliente);
        formulario.addEventListener('submit',editarCliente);
    }


    function editarCliente(e){

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
            id: idCliente,
        }

        modificarCliente(clienteObjeto);


    }

    function verificarCorreo(correo){
        exprRegular =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        let resultado = exprRegular.test(correo);
        return resultado;

    }

    function modificarCliente(clienteObjeto){
        const transaction = DB.transaction(['clientes'],'readwrite');
        const objectStore = transaction.objectStore('clientes');

        objectStore.put(clienteObjeto);

        transaction.oncomplete = ()=>{
            mostrarMensajeSuceso(`Cliente modificado con éxito`);
            formulario.querySelector('[type="submit"]').disabled = true;
            setTimeout(() => {
                formulario.reset();
                window.location = 'index.html'; 
            }, 3000);
        }

        transaction.onerror = ()=>{
            mostrarMensaje(`Sucedió un error`,`error`);
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

    function mostrarMensaje(mensaje,tipo,titulo='Oops...'){
        Swal.fire({
            icon: `${tipo}`,
            title: `${titulo}`,
            text: `${mensaje}`,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#267873',
            showCloseButton: true,
            focusConfirm: false,
            allowOutsideClick: false,

          })
    }

    function obtenerIdCliente(){
        const parametrosURL = new URLSearchParams(window.location.search);
        idCliente = Number(parametrosURL.get('id'));
        console.log(idCliente);
        if(idCliente===0){
            window.location = 'index.html';
        }

    }

    function cargarDatos(idCliente){
        const abrirConexion = window.indexedDB.open('clientes',1);

       // console.log(abrirConexion);

        abrirConexion.onerror = function(){
            console.log('Hubo un error');
        }

        abrirConexion.onsuccess = ()=>{
        DB = abrirConexion.result;

        const objectStore = DB.transaction('clientes').objectStore('clientes');

  
    objectStore.openCursor().onsuccess = (e)=>{
	const cursor = e.target.result;
	if(cursor){
		if(cursor.value.id === idCliente){
            nombre.value = cursor.value.nombre;
            correo.value = cursor.value.correo;
            telefono.value = cursor.value.telefono;
            empresa.value = cursor.value.empresa;
        }
		
		cursor.continue();
	}
}
}
    }








})();