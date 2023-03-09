let DB;


document.addEventListener('DOMContentLoaded',()=>{
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
})

function crmDB(){
    //crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm',1);

    // Si hay un error
    crmDB.onerror = function(){
        console.log('Hubo un error a la hora de crear DB');
    }

    //Si se creo bien
    crmDB.onsuccess = function(){
        console.log('Se creó bien la base de datos');

        DB = crmDB.result;

    }   

    //Configuración de la base de datos
    crmDB.onupgradeneeded = function(e){
       // console.log('Este método solo se ejecuta una sola vez');
        const db = e.target.result;

        //El objectStore permite crear las columnas de la base de datos
        const objectStore = db.createObjectStore('crm',{
            keyPath: 'crm',
            autoIncrement: true,
        });

        //Definir las columnas
        objectStore.createIndex('nombre','nombre',{ unique: false});
        objectStore.createIndex('email','email',{ unique: true});
        objectStore.createIndex('telefono','telefono',{ unique: true});

        console.log('Columnas creadas');
    }

};

function crearCliente(){
    let transaction = DB.transaction(['crm'],'readwrite'); 

    transaction.oncomplete = function(){
        console.log('Transacción completada');
    }

    transaction.onerror = function(){
        console.log('Hubo un error en las transacciones');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 19009120,
        nombre: 'Juanito',
        email: 'correo@correo.com',
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}