let marca = document.querySelector('#marca');
let year = document.querySelector('#year');
let minimo = document.querySelector('#minimo');
let maximo = document.querySelector('#maximo');
let puertas = document.querySelector('#puertas');
let transmision = document.querySelector('#transmision');
let color = document.querySelector('#color');
let resultado = document.querySelector('#resultado');



let max = new Date().getFullYear();
let min = max - 10;

//Generar un objeto con la búsqueda
const datosBusqueda = {
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',
}

document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos); // muestra los automoviles al cargar
    //Llena las opciones de años
    llenarSelectYear();



});

//Event listener para los select de búsqueda
marca.addEventListener('change',function(e){
    datosBusqueda.marca = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});
year.addEventListener('change',function(e){
    datosBusqueda.year = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});
minimo.addEventListener('change',function(e){
    datosBusqueda.minimo = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});
maximo.addEventListener('change',function(e){
    datosBusqueda.maximo = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});
puertas.addEventListener('change',function(e){
    datosBusqueda.puertas = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});
transmision.addEventListener('change',function(e){
    datosBusqueda.transmision = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});
color.addEventListener('change',function(e){
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});


// Funciones
function mostrarAutos(autos){

    resultado.innerHTML = '';

    autos.forEach(e=>{
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${e.marca} ${e.modelo} - ${e.year} - ${e.puertas} Puertas - ${e.color} - Transmisión: ${e.transmision} - Precio: ${e.precio} - Color: ${e.color}
        `;

       
        resultado.appendChild(autoHTML);

        
    });

};

function noHayDatos(){
    resultado.innerHTML = '';
    let noHayResultados = document.createElement('p');
    noHayResultados.textContent = 'No se encontraron resultados, intenta con otra búsqueda.';
    noHayResultados.style.color = 'red';

    resultado.appendChild(noHayResultados);

}

function llenarSelectYear(){

    for (let i = max; i >= min; i--) {
       const opcion = document.createElement('option');
       opcion.value = i;
       opcion.textContent = i;
       year.appendChild(opcion);
        
    }

}

function filtrarAuto(){
   let resultadoFiltro = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

   console.log(resultadoFiltro);
   console.log(resultadoFiltro.length);
   if(resultadoFiltro.length){

   mostrarAutos(resultadoFiltro);

    }else{
        noHayDatos();
    }
}

function filtrarMarca(e){
    if(datosBusqueda.marca){
        return e.marca === datosBusqueda.marca;
    }else{
        return e;
    }
}

function filtrarYear(e){
    if(datosBusqueda.year){
        return e.year === parseInt(datosBusqueda.year);
    }else{
        return e;
    }
}

function filtrarMinimo(e){
    if(datosBusqueda.minimo){
        return parseInt(datosBusqueda.minimo) <= e.precio ;
    }else{
        return e;
    }
}

function filtrarMaximo(e){
    if(datosBusqueda.maximo){
        return parseInt(datosBusqueda.maximo) >= e.precio ;
    }else{
        return e;
    }
}

function filtrarPuertas(e){
    if(datosBusqueda.puertas){
        return e.puertas === parseInt(datosBusqueda.puertas);
    }else{
        return e;
    }
}

function filtrarTransmision(e){
    if(datosBusqueda.transmision){
        return e.transmision === datosBusqueda.transmision;
    }else{
        return e;
    }
}

function filtrarColor(e){
    if(datosBusqueda.color){
        return e.color === datosBusqueda.color;
    }else{
        return e;
    }
}

