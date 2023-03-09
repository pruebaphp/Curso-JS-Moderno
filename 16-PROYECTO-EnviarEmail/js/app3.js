// document.addEventListener('DOMContentLoaded',function(){

// let objetoEnvio = {
//     email: '',
//     asunto: '',
//     mensaje: '',
// }

// let email = document.querySelector('#email');
// let asunto = document.querySelector('#asunto');
// let mensaje = document.querySelector('#mensaje');
// let botonEnviar = document.querySelector('#formulario button[type="submit"]');
// let formulario = document.querySelector('#formulario');
// let spinner = document.querySelector('#spinner');

// email.addEventListener('blur',verificarCampo);
// asunto.addEventListener('blur',verificarCampo);
// mensaje.addEventListener('blur',verificarCampo);
// formulario.addEventListener('submit',enviarEmail);

//     function verificarCampo(e){
//             console.log(botonEnviar);

//         if(e.target.value===""){
//            crearAlerta(`El campo ${e.target.id} es obligatorio.`,e.target.parentElement);

//            return
//         }else{
//             objetoEnvio[e.target.id] = e.target.value;
//     //        console.log(objetoEnvio);
//             borrarAlerta(e.target.parentElement);
//         }

//         if(e.target.id === "email" && !verificarEmail(e.target.value)){
//             crearAlerta('El email no es válido.', e.target.parentElement);
//             objetoEnvio.email = '';
//             validarSiExisteAlgunaAlerta();
            
//             return
//         }else{
//             objetoEnvio[e.target.id] = e.target.value;
//       //      console.log(objetoEnvio);
//             borrarAlerta(e.target.parentElement);
//         }
//         console.log(objetoEnvio);
//         validarSiExisteAlgunaAlerta();

        
//     }

//     function crearAlerta(mensaje,elemento){


//         borrarAlerta(elemento);

//         let alerta = document.createElement('p');
//         alerta.textContent = mensaje;
//         alerta.style.color = 'red';
//         alerta.style.fontStyle = 'italic';
//         alerta.classList.add('campo-invalido');
//         elemento.appendChild(alerta);
//     }

//     function borrarAlerta(elemento){

//         parrafoAlerta = elemento.querySelector('.campo-invalido');

//         if(parrafoAlerta){
//             parrafoAlerta.remove();
//         };
//     }

//     function verificarEmail(email){
//         var expresion =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
//         var resultado = expresion.test(email);
//         return resultado;
//     }

//     function validarSiExisteAlgunaAlerta(){
//         let respuesta = Object.values(objetoEnvio).includes('');
//         //si respuesta es true, quiere decir que hay un valor vacio en el objeto
//         if(respuesta){
//             botonEnviar.classList.add('opacity-50');
//             botonEnviar.disabled = true;
//         }else{
//             botonEnviar.classList.remove('opacity-50');
//             botonEnviar.disabled = false;
//         }
//     }

//    function enviarEmail(e){

//     e.preventDefault();

    
//     spinner.classList.remove('hidden');
//     spinner.classList.add('flex');

//     setTimeout(() => {
//         spinner.classList.add('hidden');
//         spinner.classList.remove('flex');
//         objetoEnvio.email = '';
//         objetoEnvio.mensaje = '';
//         objetoEnvio.asunto = '';
//         validarSiExisteAlgunaAlerta();
//          formulario.reset();   
//     }, 2500);

//     }

// });



document.addEventListener('DOMContentLoaded',function(){

    let objetoEnvio = {
        email: '',
        asunto: '',
        mensaje: '',
        cc: 'VacioOCorrecto',
    }
    
    let email = document.querySelector('#email');
    let asunto = document.querySelector('#asunto');
    let mensaje = document.querySelector('#mensaje');
    let botonEnviar = document.querySelector('#formulario button[type="submit"]');
    let formulario = document.querySelector('#formulario');
    let spinner = document.querySelector('#spinner');
    let cc = document.querySelector('#cc');
    
    email.addEventListener('input',verificarCampo);
    asunto.addEventListener('input',verificarCampo);
    mensaje.addEventListener('input',verificarCampo);
    cc.addEventListener('input',verificarCampoCC);
    formulario.addEventListener('submit',enviarEmail);

        function verificarCampoCC(e){
            if(e.target.id==="cc" && e.target.value !=="" && !verificarEmail(e.target.value)){
               
                crearAlerta(`El email del cc no es valido`,e.target.parentElement);
                objetoEnvio.cc = 'incorrecto';
             }else{
                objetoEnvio.cc = 'VacioOCorrecto';
                borrarAlerta(e.target.parentElement);
             }

             validarSiExisteAlgunaAlerta();
           //  console.log(objetoEnvio); 
        }
    
        function verificarCampo(e){
             //   console.log(botonEnviar);


            if(e.target.value===""){
               crearAlerta(`El campo ${e.target.id} es obligatorio.`,e.target.parentElement);
    
               return
            }else{
                objetoEnvio[e.target.id] = e.target.value;
        //        console.log(objetoEnvio);
                borrarAlerta(e.target.parentElement);
            }
    
            if(e.target.id === "email" && !verificarEmail(e.target.value)){
                crearAlerta('El email no es válido.', e.target.parentElement);
                objetoEnvio.email = '';
                validarSiExisteAlgunaAlerta();
                
                return
            }else{
                objetoEnvio[e.target.id] = e.target.value;
          //      console.log(objetoEnvio);
                borrarAlerta(e.target.parentElement);
            }

            
         //   console.log(objetoEnvio);
            validarSiExisteAlgunaAlerta();
    
            
        }
    
        function crearAlerta(mensaje,elemento){
    
    
            borrarAlerta(elemento);
    
            let alerta = document.createElement('p');
            alerta.textContent = mensaje;
            alerta.style.color = 'red';
            alerta.style.fontStyle = 'italic';
            alerta.classList.add('campo-invalido');
            elemento.appendChild(alerta);
        }
    
        function borrarAlerta(elemento){
    
            parrafoAlerta = elemento.querySelector('.campo-invalido');
    
            if(parrafoAlerta){
                parrafoAlerta.remove();
            };
        }
    
        function verificarEmail(email){
            var expresion =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
            var resultado = expresion.test(email);
            return resultado;
        }
    
        function validarSiExisteAlgunaAlerta(){
            
            //si respuesta es true, quiere decir que hay un valor vacio en el objeto
            if(Object.values(objetoEnvio).includes('') || Object.values(objetoEnvio).includes('incorrecto')){
                botonEnviar.classList.add('opacity-50');
                botonEnviar.disabled = true;
            }else{
                botonEnviar.classList.remove('opacity-50');
                botonEnviar.disabled = false;
            }
        }
    
       function enviarEmail(e){
    
        e.preventDefault();
    
        
        spinner.classList.remove('hidden');
        spinner.classList.add('flex');
    
        setTimeout(() => {
            spinner.classList.add('hidden');
            spinner.classList.remove('flex');
            objetoEnvio.email = '';
            objetoEnvio.mensaje = '';
            objetoEnvio.asunto = '';
            validarSiExisteAlgunaAlerta();
             formulario.reset();   
        }, 2500);
        
        }
    
    });