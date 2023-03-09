//Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners(){
    //Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click',agregarCurso);
}

function agregarCurso(e){

    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){

        let cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCusrso(cursoSeleccionado);
    }
   
}

function leerDatosCusrso(curso){
    //console.log(curso);

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        nombreCurso : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.u-pull-right').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: "1", 

    }

    //Agregando elementos al arreglo del carrito

    articulosCarrito = [...articulosCarrito,infoCurso];
    //articulosCarrito.push(infoCurso);

    //console.log(articulosCarrito);
    carritoHTML();

    

}


//Muestra el carrito de comprsa en el HTML

function carritoHTML(){

    //Limpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el html
    articulosCarrito.forEach(curso=>{


        let filaProducto = document.createElement('tr');
        
        filaProducto.innerHTML = `
        <td><img src="${curso.imagen}" width='100'></td>
        <td>${curso.nombreCurso}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${curso.id}">x<a></td>
        `

        //Agrega el html
        contenedorCarrito.appendChild(filaProducto);
    });
}


//Elimina los cursos del tbody

function limpiarHTML(){
    //forma lenta
    //contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}