/*const cargarTxtBtn = document.querySelector('#cargarTxt');

cargarTxtBtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    
    const url = 'data/datos.txt';
//una promise tiene resolve y reject
    fetch(url)
    //fech usa los promises, si obtiene la respuesta se imprimirá esto
        .then(respuesta=>{
            console.log('Se encontró la respuesta:',respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);

            //las funciones mas comunes se usan json o text
            return respuesta.text();
        })

        .then( datos =>{
            console.log(datos);
        })
        .catch(error=>{
            console.log(error)
        })

    }*/



    const cargarTxtBtn = document.querySelector('#cargarTxt');

    const url = 'data/datos2.txt';

    cargarTxtBtn.addEventListener('click',cargarDatos);


    function cargarDatos(){

   
    fetch(url)
        .then(resultado=>{
            console.log('Si se pudieron obtener lo datos');
            console.log(resultado);
            return resultado.text();
        })

        .catch(error=>{
            console.log(error);
        })

        .then(data=>{
            console.log(data);
        })


    }
   