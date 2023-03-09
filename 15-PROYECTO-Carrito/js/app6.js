//creando las variables
let listaCursos = document.querySelector('#lista-cursos');
let listaCarrito = document.querySelector('#lista-carrito tbody'); 
let carrito = document.querySelector('#carrito');
let arregloCursos = [];

//crando los Event Listener

listaCursos.addEventListener('click',obtenerCurso);
carrito.addEventListener('click',vaciarEliminarCarrito);
document.addEventListener('DOMContentLoaded',function(){
    //obtener El arreglo del local Storage
    localProductos = JSON.parse(localStorage.getItem('localProductos'));

    if(localProductos){
        arregloCursos = localProductos
    }else{
        arregloCursos = [];
    }

    crearHTMLcarrito();

})

//Creando las funciones
function vaciarEliminarCarrito(e){
    if(e.target.classList.contains('vaciarCarrito')){
        vaciarCarrito();
    }
    if(e.target.classList.contains('borrar-curso')){
        borrarProducto(e.target.getAttribute('data-id'));
    }
}

function borrarProducto(idProducto){
    arregloCursos = arregloCursos.filter(e=>e.id!==idProducto);
    crearHTMLcarrito();
}

function vaciarCarrito(){
    arregloCursos = [];
    crearHTMLcarrito();
}

function obtenerCurso(e){

    e.preventDefault();
   if(e.target.classList.contains('agregar-carrito')){
        crearObjetoCurso(e.target.parentElement.parentElement);
       
   }
}


function crearObjetoCurso(elemento){
    let imagen = elemento.querySelector('.imagen-curso').src;
    let nombre = elemento.querySelector('h4').textContent;
    let precio = elemento.querySelector('.u-pull-right').textContent;
    let cantidad = 1;
    let id = elemento.querySelector('a').getAttribute('data-id');

    let ObjetoCurso = {
        imagen,
        nombre,
        precio,
        cantidad,
        id,
    }

    let existe=false;

     arregloCursos.forEach(e=>{
        if(e.id===id){
            existe=true;
        }
    });

    let mensaje = `Cantidad aumentada del producto`;
    let icono = `success`;
   
    if(existe === true){
        
        let arregloFiltrado = arregloCursos.map(e=>{
            if(e.id === id){
                if(e.cantidad>=10){
                    mensaje = `Ya no se cuenta con stock`;
                    icono = `error`;
                    e.cantidad=10;
                }else{
                    e.cantidad++;
                }
                return e;
            }else{
                return e;
            }
        });

        console.log(arregloFiltrado);
       /* console.log(arregloCursos);*/
        arregloCursos = arregloFiltrado;
       // console.log('Existe');
       Swal.fire({
        position: 'top-start',
        icon: icono,
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
      })

    }else{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1500
          })
        arregloCursos.push(ObjetoCurso);
    }
    
 //   console.log(arregloCursos);
    crearHTMLcarrito();
}

function crearHTMLcarrito(){

    listaCarrito.innerHTML = '';
    if(arregloCursos.length>0){
    arregloCursos.forEach(e=>{
        const filaCarrito = document.createElement('tr');
        filaCarrito.innerHTML = `
            <td><img src="${e.imagen}" width = "100"></td>
            <td>${e.nombre}</td>
            <td>${e.precio}</td>
            <td>${e.cantidad}</td>
            <td><a href="#" data-id="${e.id}" class="borrar-curso">X</a></td>

        `
        listaCarrito.appendChild(filaCarrito);
    })

   
}
sincronizarStorage();


}

function sincronizarStorage(){
    localStorage.setItem('localProductos',JSON.stringify(arregloCursos));
}