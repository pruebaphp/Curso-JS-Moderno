let listaCursos = document.querySelector('#lista-cursos');
let listaCarrito = document.querySelector('#lista-carrito tbody');
let arregloCursos = [];
let vaciarCarrito = document.querySelector('#vaciar-carrito');

vaciarCarrito.addEventListener('click',vaciarCarritoCompra);
listaCursos.addEventListener('click',obtenerDatosCurso);

function vaciarCarritoCompra(e){
    arregloCursos = [];
    crearHTMLcarrito();
}

function obtenerDatosCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        let cursoSeleccionado = e.target.parentElement.parentElement;
        crearObjetoCurso(cursoSeleccionado);
    }
}

function crearObjetoCurso(curso){

    let imagen = curso.querySelector('.imagen-curso').src;
    let nombre = curso.querySelector('h4').textContent;
    let precio = curso.querySelector('.u-pull-right').textContent;
    let cantidad = 1;
    let id = curso.querySelector('.agregar-carrito').getAttribute('data-id');

    let objetoCurso = {
        imagen: imagen,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        id: id
    }

   // console.log(objetoCurso);
   creandoArregloConObjetos(objetoCurso);
  
   

}

function creandoArregloConObjetos(objetoCurso){
    arregloCursos.push(objetoCurso);
    console.log(arregloCursos);
   crearHTMLcarrito();
}

function crearHTMLcarrito(){

    limpiarHTML();

    arregloCursos.forEach(e=>{
    let filaProducto = document.createElement('tr');
    filaProducto.innerHTML = `
    <td><img src="${e.imagen}" width="100"></td>
    <td>${e.nombre}</td>
    <td>${e.precio}</td>
    <td>${e.cantidad}</td>
    <td><a href="#" class="borrar-curso" data-id="${e.id}">x</a></td>
    `;
    listaCarrito.appendChild(filaProducto);
});
   
}

function limpiarHTML(){
    listaCarrito.innerHTML = '';
}
