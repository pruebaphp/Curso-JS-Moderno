//Declarando variables

let detalleCarrito = document.querySelector('#lista-carrito tbody');
let btnsAgregarCarrito = document.querySelectorAll('.agregar-carrito');
let carrito = document.querySelector('#carrito');
let btnVaciarCarrito = document.querySelector('#vaciar-carrito');
let arregloProductos = [];

btnsAgregarCarrito.forEach((e)=>{
   e.addEventListener('click',leerDatosDelCurso);
});


carrito.addEventListener('click',eliminarCurso);
btnVaciarCarrito.addEventListener('click',vaciarCarrito);

function vaciarCarrito(e){
    arregloProductos = [];
    crearHTMLconArreglo();
}

//para eliminar

 function eliminarCurso(e){
     if(e.target.classList.contains('borrar-curso')){
      let cursoIdEliminar = e.target.getAttribute('data-id');
      //Elimina del arreglo del arreglo de productos 
      arregloProductos = arregloProductos.filter(curso=>curso.id !== cursoIdEliminar);
      crearHTMLconArreglo();
     }
   

 }


//para agregar
function leerDatosDelCurso(e){
    e.preventDefault();
    let cursoSeleccionado = e.target.parentElement.parentElement;
   // console.log(cursoSeleccionado);
    creandoObjetoProducto(cursoSeleccionado);

}

function creandoObjetoProducto(curso){

    let imagen = curso.querySelector('.imagen-curso').src;
    let nombre = curso.querySelector('h4').textContent;
    let precio = curso.querySelector('.u-pull-right').textContent;
    let cantidad = 1;
    let id = curso.querySelector('a').getAttribute('data-id');

   //creandoObjeto
   let objetoProducto = {
    imagen: `${imagen}`,
    nombre: `${nombre}`,
    precio: `${precio}`,
    cantidad: `${cantidad}`,
    id: `${id}`,
   }

   //console.log(objetoProducto);
   //llamando a funcion para crear html
   creandoArregloConObjetos(objetoProducto);


}

function creandoArregloConObjetos(objetoProducto){

//Revisa si un elemento ya existe en el carrito
    const existe = arregloProductos.some(curso=>curso.id === objetoProducto.id );
   if(existe){
    //Actualizar la cantidad
    const cursos = arregloProductos.map(curso=>{
        if(curso.id === objetoProducto.id){
            curso.cantidad++;
            return curso; // retorna el objeto actualizada su cantidad
        }else{
            return curso; // retorna los objetos que no son duplicados
        }
    });

   arregloProductos= [...cursos];


   }else{
    arregloProductos.push(objetoProducto);
   }

   crearHTMLconArreglo(objetoProducto);
       
};

function crearHTMLconArreglo(){

    limpiarHTML();


    arregloProductos.forEach(e=>{


    let filaProducto = document.createElement('tr');
     filaProducto.innerHTML = `
        <td><img src="${e.imagen}" width="100"></td>
        <td>${e.nombre}</td>
        <td>${e.precio}</td>
        <td>${e.cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${e.id}">x</a></td>
    `;

    detalleCarrito.appendChild(filaProducto);

    });
}

function limpiarHTML(){
    detalleCarrito.innerHTML=``;
}


