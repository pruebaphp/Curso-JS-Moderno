const monedaSelect = document.querySelector('#moneda');
const criptomonedasSelect = document.querySelector('#criptomonedas');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: '',
}


document.addEventListener('DOMContentLoaded',()=>{
    consultarCriptomendas();
    formulario.addEventListener('submit',validarFormulario);
    monedaSelect.addEventListener('change',asignarValor);
    criptomonedasSelect.addEventListener('change',asignarValor);
})

function asignarValor(e){
    objBusqueda[e.target.name] = e.target.value;
    console.log(objBusqueda);
}

function validarFormulario(e){
    e.preventDefault();

    if(Object.values(objBusqueda).includes('')){
       mostrarAlerta('Todos los campos son obligatorios.');
       return;
    }

    if(document.querySelector('.mensajeAlerta')){
        document.querySelector('.mensajeAlerta').remove();
      }

    activarSpinner();
   setTimeout(() => {
    cosultarAPI();
   }, 1500); 
   

   
}

function activarSpinner(){
    resultado.innerHTML = `<div class="sk-chase">
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
  </div>`;
}


async function cosultarAPI(){
    const {moneda,criptomoneda} = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    try {
        const respuesta = await fetch(url);
        const data = await respuesta.json();

        mostrarCotizacionHTML(data.DISPLAY[criptomoneda][moneda]);
        
    } catch (error) {
        console.log(error);
    }

}

function mostrarCotizacionHTML(cotizacion){
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,LASTUPDATE} = cotizacion;

    resultado.innerHTML = '';


    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `Precio más alto del día: <span>${HIGHDAY}</span>`

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `Precio más bajo del día: <span>${LOWDAY}</span>`

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `Variación últimas en las 24 horas: <span>${CHANGEPCT24HOUR}%</span>`

    const ultimaActualización = document.createElement('p');
    ultimaActualización.innerHTML = `Última actualización: <span>${LASTUPDATE}</span>`

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualización);

    
}

function mostrarAlerta(mensaje){

      if(document.querySelector('.mensajeAlerta')){
        document.querySelector('.mensajeAlerta').remove();
      }

      let div = document.createElement('div');
      div.textContent = mensaje;
      div.classList.add('error','mensajeAlerta');
      formulario.insertBefore(div,formulario.children[3]);

      setTimeout(() => {
        div.remove();
      }, 4000);
}

async function consultarCriptomendas(){

    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    try {

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        obtnerCriptomonedas(resultado.Data);

    } catch (error) {
        console.log(error);
    }

    
}


function obtnerCriptomonedas(array){
    criptomonedasSelect.innerHTML = `
        <option value="" disabled selected>-- Elige tu criptomoneda --</option>`
    array.forEach(element => {
        const {FullName,Name} = element.CoinInfo;
       // console.log(CoinInfo.FullName);
        criptomonedasSelect.innerHTML += `
        <option value="${Name}">${FullName}</option>
        `;
    });
}