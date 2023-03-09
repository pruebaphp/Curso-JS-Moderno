// (function(){

//     let DB;

//     const listadoClientes = document.querySelector('#listado-clientes');
//  /*   window.onload = ()=>{

//     }*/

//     document.addEventListener('DOMContentLoaded',function(){
//         crearDB();

//         if(window.indexedDB.open('crm',1)){
//             obtenerClientes();
//         }

//         listadoClientes.addEventListener('click',eliminarRegistro);
//     })

//     function eliminarRegistro(e){
//         //aplicando delegeishon
//         if(e.target.classList.contains('eliminar')){
//             const idEliminar = Number(e.target.getAttribute('data-cliente'));
            
//             const confirmar = confirm('Deseas eliminar este cliente');
//            // console.log(confirmar);
//             if(confirmar){
//                 const transaction = DB.transaction(['crm'],'readwrite');
//                 const objectStore = transaction.objectStore('crm');

//                 objectStore.delete(idEliminar);

//                 transaction.oncomplete = function(){
//                     e.target.parentElement.parentElement.remove();
//                     console.log('Exitoso');
//                 }

//                 transaction.onerror = ()=>{
//                     console.log('Hubo un error');
//                 }
//             }
//         }
      
//     }

//     //Crea la base de datos de indexDB
//     function crearDB(){
//         //abriendo una conexion
//         const crearDB = window.indexedDB.open('crm',1);

//         crearDB.onerror = ()=>{
//             console.log('Hubo un error');
//         }

//         crearDB.onsuccess = ()=>{
//             console.log('Base de datos creada correctamente');
//             DB = crearDB.result;
//         }

//         crearDB.onupgradeneeded = (e)=>{
//             const db = e.target.result;
            
//             const objectStore = db.createObjectStore('crm',{keyPath: 'id', autoIncrement:true});

//             objectStore.createIndex('nombre','nombre',{unique:false});
//             objectStore.createIndex('email','email',{unique:true});
//             objectStore.createIndex('telefono','telefono',{unique:false});
//             objectStore.createIndex('empresa','empresa',{unique:false});
//             objectStore.createIndex('id','id',{unique:true});

//             console.log('DB lista y creada');

//         }
//     }

//     function obtenerClientes(){
//         const abrirConexion = window.indexedDB.open('crm',1);

//         console.log(abrirConexion);

//         abrirConexion.onerror = function(){
//             console.log('Hubo un error');
//         }

//         abrirConexion.onsuccess = ()=>{
//             console.log('TAMOS BIEN');
//             DB = abrirConexion.result;
        

//         const objectStore = DB.transaction('crm').objectStore('crm');



//         objectStore.openCursor().onsuccess = function(e){
//             const cursor = e.target.result;
//             if(cursor){
//             const {nombre,email,telefono,empresa,id} = cursor.value;

//             const listadoClientes = document.querySelector('#listado-clientes');
//             listadoClientes.innerHTML += ` <tr>
//                     <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                         <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
//                         <p class="text-sm leading-10 text-gray-700"> ${email} </p>
//                     </td>
//                     <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
//                         <p class="text-gray-700">${telefono}</p>
//                     </td>
//                     <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
//                         <p class="text-gray-600">${empresa}</p>
//                     </td>
//                     <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
//                         <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
//                         <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
//                     </td>
//                 </tr>
//             `;

//                 cursor.continue();

//          }
//         }
//     }
// }

// })();

(function(){
    let DB;

   let tablaClientes =  document.querySelector('.tablaClientes');
  
    window.onload = ()=>{
        crearDB();
        listarClientes();
        tablaClientes.addEventListener('click',obtenerIdCliente);
       
    }

    function obtenerIdCliente(e){
       // e.preventDefault();
       console.log(e.target);
        if(e.target.classList.contains('eliminarCliente')){
            console.log('Eliminando....');
          let idCliente =  Number(e.target.getAttribute('data-cliente'));
           console.log(e.target.parentElement.parentElement);
           mensajeConfirmacion(`¿Desea eliminar de la lista al cliente?`,idCliente,e.target.parentElement.parentElement);
        }
        
    }


    function mensajeConfirmacion(mensaje,id,elemento){
        Swal.fire({
            title: 'Cuidado...',
            text: `${mensaje}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'No, cancelar',
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {

               if(eliminarCliente(id)){
                elemento.remove();
                Swal.fire({
                    icon: `success`,
                    title: `Genial`,
                    text: `Cliente eliminado con éxito.`,
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#267873',
                    showCloseButton: true,
                    focusConfirm: false,
                    allowOutsideClick: false,
        
                  })
                }else{
                    Swal.fire({
                        icon: `error`,
                        title: `Oops...`,
                        text: `Ocurrio un error al eliminar al cliente.`,
                        confirmButtonText: 'Aceptar',
                        confirmButtonColor: '#267873',
                        showCloseButton: true,
                        focusConfirm: false,
                        allowOutsideClick: false,
            
                      })
                }
            }
          })
    }

    function eliminarCliente(id){
        let confirmar = true;
        const transaction = DB.transaction(['clientes'],'readwrite');
        const objectStore = transaction.objectStore('clientes');
        objectStore.delete(id);

        transaction.oncomplete = ()=>{
            console.log('Eliminado con exito al el CLIENTE');
            confirmar=true;
        };

        transaction.onerror = ()=>{
            console.log('Hubo un error Al eliminar el CLIENTE');
            confirmar=false;
        }
        console.log(confirmar);
        return confirmar;
    }


    function listarClientes(){

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

            let listadoClientes = document.querySelector('#listado-clientes');
            
            if(cursor){
                const {nombre,correo,telefono,empresa,id} = cursor.value;
             
            let fila = document.createElement('tr');
            fila.innerHTML = `
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                    <p class="text-sm leading-10 text-gray-700"> ${correo} </p>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                    <p class="text-gray-700">${telefono}</p>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                    <p class="text-gray-600">${empresa}</p>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminarCliente">Eliminar</a>
                                </td>
                            `;

                            listadoClientes.appendChild(fila);
                            cursor.continue();
                        }
          
        }   
    }
}


    function crearDB(){
        const crearDB = window.indexedDB.open('clientes',1);
        crearDB.onerror = ()=>{console.log('Hubo un error al crear la base de datos')}; 
        crearDB.onsuccess = ()=>{DB = crearDB.result}; 
        
        //Esto solo se ejectuta una sola vez, cuando se crea la base de datos	
        crearDB.onupgradeneeded = (e)=>{
            const db = e.target.result;
            const objectStore = db.createObjectStore('clientes',{keyPath:'id',autoIncrement:true});
            //Creando las llaves o atributos de la DB
            objectStore.createIndex('nombre','nombre',{unique:false});
            objectStore.createIndex('correo','correo',{unique:true});
            objectStore.createIndex('telefono','telefono',{unique:false});
            objectStore.createIndex('empresa','empresa',{unique:false});
            objectStore.createIndex('id','id',{unique:false});
        }
    }

})();