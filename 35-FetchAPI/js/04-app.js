const cargarAPI = document.querySelector('#cargarAPI');

cargarAPI.addEventListener('click',cargarDatos);

function cargarDatos(){
    fetch('https://picsum.photos/list')
        .then(respuesta=> respuesta.json())
        .then(resultado => crearHTML(resultado))
}

function crearHTML(data){
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = '';
    data.forEach(picsum=>{

        const {author,post_url,id} = picsum;
        contenido.innerHTML +=`
            <p>Autor: ${author} con ID:${id}</p>
            <a href="${post_url}">Ver imagen</a>
        `
    })

}