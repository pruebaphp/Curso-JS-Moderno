const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const paginacionDiv = document.querySelector('#paginacion');

let registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = ()=>{
    formulario.addEventListener('submit',validarFormulario);

}

function validarFormulario(e){
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if(terminoBusqueda === ""){
        mostrarMensaje('Agregar un término de búsqueda');
        return;
    }

    buscarImagenes();
}

function buscarImagenes(){
    const termino = document.querySelector('#termino').value;

    const key =  '33199565-b59e911fe48d7e6f30f610116';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`

    //console.log(url);
    resultado.innerHTML = '';
    paginacionDiv.innerHTML = '';

    fetch(url)
        .then(respuesta=>respuesta.json())
        .then(resultado=>{
            
           console.log(resultado);
           if(resultado.total===0){
            mostrarMensaje(`No se encontraron resultados para tu búsqueda, intenta otra vez.`);
            return;
           }
            totalPaginas = calcularPaginas(resultado.totalHits);
            console.log(totalPaginas);
            mostrarImagenes(resultado.hits)
        })    


}

//Generador que va registrar la cantidad de elementos de acuerdo a las paginas
function *crearPaginador(total){
    for(let i = 1 ; i<=total; i++){
        yield i;
    }
}



function calcularPaginas(total){
    return parseInt(Math.ceil(total/registrosPorPagina));
}

function mostrarImagenes(imagenes){
   // console.log(imagenes);
    resultado.innerHTML = '';

    imagenes.forEach(imagen=>{
        const {largeImageURL,previewURL,likes,views} = imagen;
        resultado.innerHTML += `
        <div class="w-1/2 md:1/3 lg:w-1/4 p-3 mb-4">
            <div class="bg-white"> 
         <img class ="w-full" src="${largeImageURL}" width="800" >

         <div class="p-4">
            <p class="font-bold">${likes}<span class="font-light"> Me gusta</span></p>
            <p class="font-bold">${views}<span class="font-light"> vistas</span></p>
            <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-10 p-1" href="${largeImageURL}" target="_blank">Ver imagen</a>
            </div>  
         </div>
         

        `
       
    })

    imprimirPaginador();
    

}

function imprimirPaginador(){
    iterador = crearPaginador(totalPaginas);
    paginacionDiv.innerHTML = '';
    while(true){
        const {value,done} = iterador.next();
        if(done) return;

        //Caso contrario, genera un boton por cada elemento en el generador
        const boton = document.createElement('a');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('Siguiente','bg-yellow-400','px-4','py-1','mr-2','font-bold','mb-4','uppercase','rounded');
        boton.onclick = ()=>{
           paginaActual = value;
           buscarImagenes();
        }

        paginacionDiv.appendChild(boton);
    }
}



function mostrarMensaje(mensaje, tipo='error'){
    Swal.fire({
        icon: `${tipo}`,
        title: 'Oops...',
        text: `${mensaje}`,
        showCloseButton: true,
        confirmButtonText : 'Aceptar',
        confirmButtonColor: '#27A098',
        allowOutsideClick: false,
        
      })
}
