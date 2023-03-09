const url = 'https://picsum.photoss/list';

window.onload = () => {
    obtenerDatos();
}

function obtenerDatos() {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}


async function obtenerDatos(){

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}