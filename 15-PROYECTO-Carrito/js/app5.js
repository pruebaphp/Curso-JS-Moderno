

let contenedorCursos = document.querySelector('#lista-cursos');
let listaCarrito = document.querySelector('#lista-carrito tbody');
let carrito = document.querySelector('#carrito');
let arregloConCursos = [];


//Para eliminar un curso en el carrito


//Para limpiar la lista de cursos

carrito.addEventListener('click',vaciarEliminarAumentarDisminuirProducto);
document.addEventListener('DOMContentLoaded',function(){
    //obtener del localStorage todo;
    arregloConCursos = JSON.parse(localStorage.getItem('arregloConCursos'));
    if(arregloConCursos===null){
        arregloConCursos = [];
    }else{
        arregloConCursos = arregloConCursos;
    }
    console.log(arregloConCursos);
    crearHTMLcarrito();
});

function vaciarEliminarAumentarDisminuirProducto(e){
    if(e.target.classList.contains('u-full-width')){
       arregloConCursos = [];
       limpiarHTMLcarrito();

    }

    if(e.target.classList.contains('borrar-curso')){
       eliminarCursoEnElCarrito(e.target.getAttribute('data-id'));
    }

    if(e.target.classList.contains('agregar-cantidad')){
        aumentarCantidadProductoCarrito(e.target.getAttribute('data-id'));
    }
    
    if(e.target.classList.contains('disminuir-cantidad')){
        disminuirCantidadProductoCarrito(e.target.getAttribute('data-id'));
    }
   
}

function disminuirCantidadProductoCarrito(id){
    
    let arregloProductoDisminuido = arregloConCursos.map(e=>{

        if(e.id===id){
            if(e.cantidad!==1){
            e.cantidad--;
            }
            return e;
        }else{
            return e;
        }
    });
    arregloConCursos = arregloProductoDisminuido;
    crearHTMLcarrito();
    
}

function aumentarCantidadProductoCarrito(id){
    let arregloProductoAumento = arregloConCursos.map(e=>{
        if(e.id === id){
            if(e.cantidad<10){
            e.cantidad ++;
        }
            return e;
        }else{
            return e;
        }
    });
    arregloConCursos = [];
    arregloConCursos = arregloProductoAumento;
    crearHTMLcarrito();
}

function eliminarCursoEnElCarrito(id){
  arregloConCursos = arregloConCursos.filter(curso=> curso.id !== id);
  crearHTMLcarrito();
}

//Para añadir un curso
contenedorCursos.addEventListener('click',obtenerCursoSeleccionado);

function obtenerCursoSeleccionado(e){
    
    e.preventDefault();


    if(e.target.classList.contains('agregar-carrito')){
        let cursoSeleccionado = e.target.parentElement.parentElement;
        crearObjetoCursoYagregarloAlArreglo(cursoSeleccionado);
    }
   
}

function crearObjetoCursoYagregarloAlArreglo(e){
    let imagen = e.querySelector('.imagen-curso').src; 
    let nombre = e.querySelector('h4').textContent;
    let precio = e.querySelector('.u-pull-right ').textContent;
    let cantidad = 1;
    let id = e.querySelector('a').getAttribute('data-id');

    let objetoCurso = {
        imagen: imagen,
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        id: id,
    }

   // console.log(objetoCurso);
let existe=false;
arregloConCursos.forEach(e=>{
    if(e.id === id){
        existe = true;
    }
});

if(existe){
    //aumentar cantidad
    let arregloCurso = arregloConCursos.map(e=>{
        if(e.id===id){
            e.cantidad++;
            return e;
        }else{
            return e;
        }
    });
    arregloConCursos = [];
    arregloConCursos = arregloCurso;
}else{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500
      })
    arregloConCursos.push(objetoCurso);
}
   
    crearHTMLcarrito();

}

function crearHTMLcarrito(){
    limpiarHTMLcarrito();
    arregloConCursos.forEach(data=>{
        let filaProducto = document.createElement('tr');
        filaProducto.innerHTML = `
        <td><img src="${data.imagen}" width="100"></td>
        <td>${data.nombre}</td>
        <td>${data.precio}</td>
        <td>${data.cantidad}</td>
        <td><a href="#" data-id="${data.id}" class="borrar-curso">x</a></td>
        <td><a href="#" data-id="${data.id}" class="agregar-cantidad">+</a></td>
        <td><a href="#" data-id="${data.id}" class="disminuir-cantidad">-</a></td>
        `;
        listaCarrito.appendChild(filaProducto);
    });

    sincronizarStorage();
}

function limpiarHTMLcarrito(){
    listaCarrito.innerHTML = '';
}

function sincronizarStorage(){
    //mandando el arreglo al localStorage
    localStorage.setItem('arregloConCursos',JSON.stringify(arregloConCursos));
}

