const container = document.querySelector('.container');
const resultadoClima = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const ciudadInput = document.querySelector('#ciudad');
const paisSelect = document.querySelector('#pais');

window.onload = ()=>{
    formulario.addEventListener('submit',buscarClima);
}

function buscarClima(e){
    e.preventDefault();

    if(ciudadInput.value==="" || paisSelect.value===""){
        mostrarAlerta(`Todos los campos son obligatorios`,'error');
        return;
    }

    let ciudadYPaisObjeto = {
        ciudad:ciudadInput.value,
        pais: paisSelect.value,
    }

    Spinner();

    setTimeout(() => {
        consultarAPI(ciudadYPaisObjeto);
    }, 2000);
  
    //console.log(ciudadYPaisObjeto);
    //console.log('Buscando el clima');
}

function consultarAPI(objeto){
    const {ciudad,pais} = objeto;

    const appId = 'aa4f76097ffc6fe49a049c5366455bf1';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    fetch(url)
        .then(respuesta=>{
            return respuesta.json();
        })
        .then(resultado=>{
            console.log(resultado);
            resultadoClima.innerHTML = '';
            if(resultado.cod==='404'){
               mostrarAlerta(`La ciudad ingresada no pertenece al país seleccionado.`);
               return;
            }   
            formulario.reset();
            mostrarClima(resultado);


           
        })
}

function mostrarClima(resultado){
    const {name,sys:{country}, main:{temp,temp_max,temp_min}} = resultado;
    const temperatura = kelvinACentigrados(temp);
    const temperatura_max = kelvinACentigrados(temp_max);
    const temperatura_min = kelvinACentigrados(temp_min);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en ${name}, ${country}`;
    nombreCiudad.classList.add('font-bold','text-2xl');
    


    const parrafoTemperatura = document.createElement('p');
    parrafoTemperatura.innerHTML = `
    ${temperatura} &#8451;
    `;
    parrafoTemperatura.classList.add('font-bold','text-6xl');

    const temp_max_parrafo = document.createElement('p');
    temp_max_parrafo.innerHTML = `Max: ${temperatura_max} &#8451`;
    temp_max_parrafo.classList.add('text-xl');

    const temp_min_parrafo = document.createElement('p');
    temp_min_parrafo.innerHTML = `Min: ${temperatura_min} &#8451`;
    temp_min_parrafo.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center','text-white','resultadoDiv');

    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(parrafoTemperatura);
    resultadoDiv.appendChild(temp_max_parrafo);
    resultadoDiv.appendChild(temp_min_parrafo);

    resultadoClima.appendChild(resultadoDiv);
}

function kelvinACentigrados(kelvin){
    return (kelvin-273.15).toFixed(2);
}

function mostrarAlerta(mensaje,tipo='error'){
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

function Spinner(){
    const divSpinner = document.createElement('div');

      divSpinner.classList.add('spinnerdx');

    divSpinner.innerHTML = `<div class="sk-chase spinner">
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
  </div>`;

    resultadoClima.innerHTML ='';
    resultadoClima.appendChild(divSpinner);
}