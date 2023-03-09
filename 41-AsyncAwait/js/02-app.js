function descargarClientes(){

    return new Promise((resolve,reject)=>{
        const error = false;
        setTimeout(() => {
            if(error){
                resolve('El listado de clientes de descargó correctamente');
            }else{
                reject('Error en la conexión');
            }
        }, 3000);
    })
}


//Async await

async function ejecutar(){

    try {
        //
      console.log(1+1);
      const respuesta = await descargarClientes();
      console.log(2+2);
      console.log(respuesta);
    } catch (error) {
        console.log(error)
    }

}

ejecutar();