
//Constructores

function Seguro(marca,year,tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Realiza la cotizacion con los datos

Seguro.prototype.cotizarSeguro = function(){
    /*
        1 = Americano 1.15
        2 = Aisatico 1.05
        3 = Europeo 1.35
    */ 
   console.log(this.marca);
   let cantidad;
   const base = 2000;
   switch(this.marca){

    case '1': cantidad = base*1.15;  break;
    case '2': cantidad = base*1.05; break;
    case '3': cantidad = base*1.35; break;

    default: break;
   }

   //Leer el año
   const diferencia = new Date().getFullYear() - this.year;
   cantidad -= ((diferencia*3)*cantidad)/100; 

   //Leyendo el tipo

   switch(this.tipo){
    case 'basico': cantidad *=1.30; break; 
    case 'completo': cantidad *=1.50; break;
    default: break;
   }

   return cantidad;
}

function UI(){

}
//Llena las opciones de los años

UI.prototype.llenarOpciones = ()=>{
    const max = new Date().getFullYear();
    min = max-20;

    const selectYear = document.querySelector('#year');

    for(let i=max; i>min; i--){
        let option = document.createElement('option');
        option.textContent = i;
        option.value = i;
        selectYear.appendChild(option);
    }
}

UI.prototype.mostrarMensaje = function(mensaje,tipo){
    const div = document.createElement('div');
    if(tipo === "error"){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }

    div.classList.add('mensaje','mt-10');
    div.textContent = mensaje;

    //Insertar el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    if(document.querySelector('.error')){
        document.querySelector('.error').remove();
    }
    formulario.insertBefore(div,formulario.children[4]);

    setTimeout(() => {
        div.remove();
    }, 2000);


}

UI.prototype.mostrarResultado = (total,seguro)=>{
        //Crear el resultado
        const div = document.createElement('div');
    let textoMarca;
        switch(seguro.marca){
            case '1': textoMarca = 'Americano'; break;
            case '2': textoMarca = 'Asiatico'; break;
            case '3': textoMarca = 'Europeo'; break;
            default: break;

        }

        div.classList.add('mt-10', 'divResultado');
    
        div.innerHTML = `
            <p class="header">Tu resumen</p>
            <p class="font-bold">Marca: ${textoMarca}</p>
            <p class="font-bold">Año: ${seguro.year}</p>
            <p class="font-bold">Tipo: ${seguro.tipo}</p>
            <p class="font-bold">Total: ${total}</p>
        `;


        const resultadoDiv = document.querySelector('#resultado');
      

        //Mostrar el spinner

        const spinner = document.querySelector('#cargando');


     spinner.classList.remove('hidden');

        setTimeout(() => {
          spinner.classList.add('hidden');
          resultadoDiv.appendChild(div);

        }, 2000);
}

//insanciar UI
const ui = new UI();
console.log(ui);

document.addEventListener('DOMContentLoaded',()=>{
    ui.llenarOpciones();
})

eventListeners();
function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit',cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();
    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    console.log(marca)

    //Leer el año seleccionado
    const year = document.querySelector('#year').value;


    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(document.querySelector('.divResultado')){
        document.querySelector('.divResultado').remove();
    }

    if(marca==="" || year==="" || tipo===""){
        ui.mostrarMensaje('Todos los campos son obligatorios','error');
        return;
    }

    ui.mostrarMensaje('Cotizando...','exito');


    //Instanciar el seguro
    const seguro = new Seguro(marca,year,tipo);
    const total = seguro.cotizarSeguro();

  
        ui.mostrarResultado(total,seguro);
   

   
    //Utilizar el prototype que va cotizar

  
}