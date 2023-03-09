let clienteObj = {
    mesa: '',
    hora: '',
    pedido: [],
};

const categorias = {
    1:'Comida',
    2:'Bebidas',
    3:'Postres'
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');
const contenido = document.querySelector('#platillos .contenido');


window.onload = ()=>{
    btnGuardarCliente.addEventListener('click',guardarCliente);
    
}

function guardarCliente(){
   const mesa = document.querySelector('#mesa').value;
   const hora = document.querySelector('#hora').value;

   //Revisar si hay campos vacios
                             //.some(valor => valor==="")
   const valores = [mesa,hora].includes('');

   if(valores){
    mostrarAlerta(`Todos los campos son obligatorios`);
    return;
   }

   clienteObj = { ...clienteObj , mesa, hora };

   console.log(clienteObj);

   //Ocultar modal

   const modalFormulario = document.querySelector('#formulario');
   const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
   modalBootstrap.hide();

   //Mostrar las secciones
   mostrarSecciones();

   //Obtener platillos de la API de JSON-Server

   obtenerPlatillos();

}

function obtenerPlatillos(){
    const url = "http://localhost:4000/platillos";
    fetch(url)
        .then(respuesta=>respuesta.json())
        .then(data=>mostrarPlatillos(data));
}

function mostrarPlatillos(platillos){

    contenido.innerHTML = '';

    const rowTitulo = document.createElement('div');
    rowTitulo.classList.add('row','py-4');

    rowTitulo.innerHTML = `
    <div class="col-md-4 fw-bold text-uppercase text-center">Nombre del platillo</div>
    <div class="col-md-3 fw-bold text-uppercase text-center">Precio</div>
    <div class="col-md-3 fw-bold text-uppercase text-center">Categoria</div>
    <div class="col-md-2 fw-bold text-uppercase text-center">cantidad</div>
    `
    contenido.appendChild(rowTitulo);

    platillos.forEach(platillo=>{
        //Destructuring 
        const {id,nombre,precio,categoria} = platillo;



        
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row','py-2','border-top');

        const nombreDiv = document.createElement('div');
        nombreDiv.classList.add('col-md-4','text-center');
        nombreDiv.textContent = nombre;

        const precioDiv = document.createElement('div');
        precioDiv.classList.add('col-md-3','fw-bold','text-center');
        precioDiv.textContent = `S/. ${precio}`


        const categoriaDiv = document.createElement('div');
        categoriaDiv.classList.add('col-md-3','text-center');
        categoriaDiv.textContent = categorias[categoria];

        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min = '0';
        inputCantidad.value = '0';
        inputCantidad.id = `producto-${id}`;
        inputCantidad.setAttribute('data-id',id);
        inputCantidad.classList.add('form-control');
        inputCantidad.onchange = ()=>{
            const cantidad = Number(inputCantidad.value);
            //spread operator
            agregarPedido({...platillo,cantidad});
        }

        const agregar = document.createElement('div');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);

//        console.log(inputCantidad);


        rowDiv.appendChild(nombreDiv);
        rowDiv.appendChild(precioDiv);
        rowDiv.appendChild(categoriaDiv);
        rowDiv.appendChild(agregar);

        contenido.appendChild(rowDiv);
        

        
    });
}

function agregarPedido(platillo){
    let existe = clienteObj.pedido.some(producto =>  producto.id === platillo.id);
    //Revisar que la cantidad sea mayor a 0 
    if(platillo.cantidad>0){
        if(existe){
            
            clienteObj.pedido = clienteObj.pedido.map(e=>{
                if(e.id === platillo.id){
                    e.cantidad = platillo.cantidad; 
                    return e;
                }else{
                    return e;
                }
            });
            console.log(clienteObj.pedido);
        }else{

            clienteObj.pedido.push(platillo);

            console.log(clienteObj.pedido);
        }

        
    }else{
        if(platillo.cantidad===0){
            if(existe){
                clienteObj.pedido = clienteObj.pedido.filter(e=>e.id!==platillo.id);
                console.log(clienteObj.pedido);
            }
        }
       // console.log('No es mayor a 0');
    }



    if(!clienteObj.pedido.length){
       mensajePedidoVacio();
    }else{

    //Mostrar el Resumen
    actualizarResumen();
    }


    


   
}

function actualizarResumen(){


    const contenido = document.querySelector('#resumen .contenido');

    contenido.innerHTML = '';

    const resumen = document.createElement('div');
    resumen.classList.add('col-md-6','card','py-5','px-3','shadow');
    //Informacion de la mesa

    const mesa = document.createElement('p');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('span');
    mesaSpan.textContent = clienteObj.mesa;
    mesaSpan.classList.add('fw-normal');
//Informacion de la hora
    const hora = document.createElement('p');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('span');
    horaSpan.textContent = clienteObj.hora;
    horaSpan.classList.add('fw-normal');

    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    //TItulo de la seccion
    const heading = document.createElement('h3');
    heading.textContent = 'Platillos consumidos';
    heading.classList.add('my-4','text-center');

    //Iterar sobre el array de pedidos

    const grupo = document.createElement('ul');
    grupo.classList.add('list-group');

    const {pedido} = clienteObj;

    pedido.forEach(articulo=>{
        const { nombre,cantidad,precio,id} = articulo;

        const lista = document.createElement('li');
        lista.classList.add('list-group-item');

        const nombreEl = document.createElement('h4');
        nombreEl.classList.add('my-4');
        nombreEl.textContent= nombre;

        //cantidad

        const cantidadEL = document.createElement('p');
        cantidadEL.classList.add('fw-bold');
        cantidadEL.textContent = 'Cantidad: ';

        const cantidadValor = document.createElement('SPAN');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;

        cantidadEL.appendChild(cantidadValor);

                //Precio

        const precioEL = document.createElement('p');
        precioEL.classList.add('fw-bold');
        precioEL.textContent = 'Precio: ';

        const precioValor = document.createElement('SPAN');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `S/. ${precio}`;


        precioEL.appendChild(precioValor);


                        //Subtotal

        const subtotalEL = document.createElement('p');
        subtotalEL.classList.add('fw-bold');
        subtotalEL.textContent = 'Subtotal: ';

        const subTotalValor = document.createElement('SPAN');
        subTotalValor.classList.add('fw-normal');
        subTotalValor.textContent = `S/. ${precio*cantidad}`;


        subtotalEL.appendChild(subTotalValor);

        //Boton para eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn','btn-danger');
        btnEliminar.textContent = 'Eliminar del pedido';
        btnEliminar.onclick = ()=>{
            eliminarPedido(id);
        }



        lista.appendChild(nombreEl);
        lista.appendChild(cantidadEL);
        lista.appendChild(precioEL);
        lista.appendChild(subtotalEL);
        lista.appendChild(btnEliminar);

        //agregar lista
        grupo.appendChild(lista);


    });
    resumen.appendChild(heading);

    resumen.appendChild(mesa);
    resumen.appendChild(hora);
  
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);

    //Mostrar formulario de propinas

    formularioPropinas();

}

function formularioPropinas(){
    const contenido = document.querySelector('#resumen .contenido');

    const formulario = document.createElement('div');
    formulario.classList.add('col-md-6','formulario');

    const divFormulario = document.createElement('div');
    divFormulario.classList.add('card','card','py-2','px-3','shadow');


    const heading = document.createElement('h3');
    heading.classList.add('my-4','text-center');
    heading.textContent = 'Propina';


    //Radio button 10%
    const radio10 = document.createElement('input');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = '10';
    radio10.classList.add('form-check-input');
    radio10.onclick = (e)=>{
        calcularPropina(10);
    };

    const radio10Label = document.createElement('label');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label');

    const radio10Div = document.createElement('div');
    radio10Div.classList.add('form-check');

    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);

        //Radio button 25%
        const radio25 = document.createElement('input');
        radio25.type = 'radio';
        radio25.name = 'propina';
        radio25.value = '25';
        radio25.classList.add('form-check-input');
        radio25.onclick = (e)=>{
            calcularPropina(25);
        };
    
        const radio25Label = document.createElement('label');
        radio25Label.textContent = '25%';
        radio25Label.classList.add('form-check-label');
    
        const radio25Div = document.createElement('div');
        radio25Div.classList.add('form-check');
    
        radio25Div.appendChild(radio25);
        radio25Div.appendChild(radio25Label);


                //Radio button 50%
                const radio50 = document.createElement('input');
                radio50.type = 'radio';
                radio50.name = 'propina';
                radio50.classList.add('radioPropina');
                radio50.value = '50';
                radio50.classList.add('form-check-input');
                radio50.onclick = (e)=>{
                    calcularPropina(50);
                };
            
                const radio50Label = document.createElement('label');
                radio50Label.textContent = '50%';
                radio50Label.classList.add('form-check-label');
            
                const radio50Div = document.createElement('div');
                radio50Div.classList.add('form-check');
            
                radio50Div.appendChild(radio50);
                radio50Div.appendChild(radio50Label);



    //Agregar al div principal
    divFormulario.appendChild(heading);
    divFormulario.appendChild(radio10Div);
    divFormulario.appendChild(radio25Div);
    divFormulario.appendChild(radio50Div);

    //Agregar al fomrulario

    formulario.appendChild(divFormulario);

    

    contenido.appendChild(formulario);
}

function calcularPropina(propinaValor){
    let propinaPorcentaje = Number(propinaValor);
    let subtotal=0;
    let propina = 0;
    let TotalApagar = 0;

    const { pedido } = clienteObj;

    pedido.forEach(e=>{
        subtotal += e.cantidad*e.precio; 
    })

   propina = subtotal*(propinaPorcentaje/100);

   TotalApagar = propina+subtotal;

   console.log(`El subtotal es :${subtotal}, La propina es : ${propina}, El total a pagar es :${TotalApagar}`);

    mostrarTotalHTML(subtotal,TotalApagar,propina);


}

function mostrarTotalHTML(subtotal,total,propina){

    const divTotales = document.createElement('div');
    divTotales.classList.add('total-pagar');
    

    const subtotalParrafo = document.createElement('p');
    subtotalParrafo.classList.add('fs-3','fw-bold','mt-5');
    subtotalParrafo.textContent = 'Subtotal Consumo: ';

    const subtotalSpan = document.createElement('span');
    subtotalSpan.classList.add('fw-normal');
    subtotalSpan.textContent = `S/. ${subtotal}`;

    subtotalParrafo.appendChild(subtotalSpan);
    //Propina
    const propinaParrafo = document.createElement('p');
    propinaParrafo.classList.add('fs-3','fw-bold','mt-1');
    propinaParrafo.textContent = 'Propina: ';

    const propinaSpan = document.createElement('span');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `S/. ${propina}`;

    propinaParrafo.appendChild(propinaSpan);

        //Total
        const totalParrafo = document.createElement('p');
        totalParrafo.classList.add('fs-3','fw-bold','mt-1');
        totalParrafo.textContent = 'Total: ';
    
        const totalSpan = document.createElement('span');
        totalSpan.classList.add('fw-normal');
        totalSpan.textContent = `S/. ${total}`;
    
        totalParrafo.appendChild(totalSpan);

    if(document.querySelector('.total-pagar')){
        document.querySelector('.total-pagar').remove();
    }

    divTotales.appendChild(subtotalParrafo);
    divTotales.appendChild(propinaParrafo);
    divTotales.appendChild(totalParrafo);

    const formulario = document.querySelector('.formulario>div');
    formulario.appendChild(divTotales);
}

function eliminarPedido(id){
    clienteObj.pedido = clienteObj.pedido.filter(pedido=>pedido.id!==id);

    if(!clienteObj.pedido.length){
        mensajePedidoVacio();
     }else{
     //Mostrar el Resumen
     actualizarResumen();
     }

     //El producto se eliminó por lo tanto regresamos a 0 la cantidad en el formulario

     let elemento = document.querySelector(`#producto-${id}`);
     
     elemento.value = "0";

}


function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none');

    seccionesOcultas.forEach(seccion=>{
      //  console.log(seccion);
        seccion.classList.remove('d-none');
    })
}

function mostrarAlerta(mensaje){

    if(!document.querySelector('.mensajeAlerta')){
        const alerta = document.createElement('div');
        alerta.classList.add('invalid-feedback','d-block','text-center','mensajeAlerta');
        alerta.textContent = mensaje;
        document.querySelector('.modal-body form').appendChild(alerta);

        setTimeout(() => {
            document.querySelector('.mensajeAlerta').remove();
        }, 2500);

        
    }

}

function mensajePedidoVacio(){
    const contenido = document.querySelector('#resumen .contenido');
    contenido.innerHTML = '';

    const texto = document.createElement('p');
    texto.classList.add('text-center');
    texto.textContent = 'Añade los elementos del pedido';

    contenido.appendChild(texto);

}