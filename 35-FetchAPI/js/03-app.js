const cargarJSONArray = document.querySelector('#cargarJSONArray');

cargarJSONArray.addEventListener('click',cargarDatos);

function cargarDatos(){
    fetch('data/empleados.json')
        .then(respuesta=>respuesta.json())
        .then(resultado=>mostrarHTML(resultado))
}


function mostrarHTML(empleados){
    
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = '';

    empleados.forEach(empleado=>{
        const {empresa,id, nombre,trabajo} = empleado;
        
        contenido.innerHTML += `
        <p>Empleado: ${nombre}</p> 
        <p>trabajo: ${trabajo}</p> 
        <p>empresa: ${empresa}</p> 
        <p>ID: ${id}</p> 
        `
       
    })

}