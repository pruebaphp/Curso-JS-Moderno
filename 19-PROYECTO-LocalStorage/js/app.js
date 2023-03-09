let listaTweets = document.querySelector('#lista-tweets');
let formulario = document.querySelector('#formulario');
let tweets = [];

//Event listeners
formulario.addEventListener('submit',agregarTweet);

document.addEventListener('DOMContentLoaded',()=>{

    tweets = JSON.parse(localStorage.getItem('tweets')) || [];

    console.log(tweets);

    crearHTML();
}); 

//obtenerLocalStorage();

//funciones
function agregarTweet(e){
   
    e.preventDefault();

    let tweet = document.querySelector('#tweet').value;

    if(tweet===''){
        mostrarError(`No puede ir vacio`)
        return;
    }

    crearTweet(tweet);
    formulario.reset();

}

//Mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 2500);

    
}

function crearTweet(mensaje){

    let tweetObjeto = {
        id : Date.now(),
        mensaje,
    }

    tweets.push(tweetObjeto);
    crearHTML(tweets);


}

function crearHTML(){
    listaTweets.innerHTML = '';
    if(tweets.length>0){
        listaTweets.innerHTML = '';
        tweets.forEach(e=>{

            //creando el <a>
            let boton = document.createElement('a');
            boton.textContent = 'X';
            boton.classList.add('borrar-tweet');
            boton.onclick = function (){
                eliminarTweet(e.id);
            }
            listaTweets.appendChild(boton);

            //Creando html
            let li = document.createElement('li');
            li.textContent = e.mensaje;
            listaTweets.appendChild(li);
            
        })
    }

    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function eliminarTweet(id){
    tweets = tweets.filter(e=>e.id!==id);
    crearHTML();
}

