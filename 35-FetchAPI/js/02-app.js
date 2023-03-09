const cargarJSONbtn = document.querySelector('#cargarJSON');

cargarJSONbtn.addEventListener('click',cargarDatos);

function cargarDatos(){

    fetch('data/empleado.json')
        .then(respuesta=> respuesta.json() )

        .then(data=> mostrarHTML(data) )

}


function mostrarHTML(data){
    const {empresa,id, nombre,trabajo} = data;
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
       <p>Empleado: ${nombre}</p> 
       <p>trabajo: ${trabajo}</p> 
       <p>empresa: ${empresa}</p> 
       <p>ID: ${id}</p> 
      
    `

}