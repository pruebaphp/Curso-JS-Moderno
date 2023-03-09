fetch("https://rickandmortyapi.com/api/character")

.then(response => response.json())
.then(data => mostrarData(data))
.catch(err=> console.log('error',err))
let imagen="a";
    
const mostrarData = data=>{
    imagen = data.results[6].image;
}



let cotizarSeguro = document.querySelector('#cotizar-seguro');
let resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded',function(){
    setTimeout(() => {
        console.log(imagen);
        let DivImagen = document.createElement('div');
        DivImagen.innerHTML = `
            <img src="${imagen}" width="600">
        `
        resultado.appendChild(DivImagen);
        
    }, 100);

}); 
