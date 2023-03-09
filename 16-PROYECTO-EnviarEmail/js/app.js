

document.addEventListener('DOMContentLoaded',function(){
    let inputEmail = document.querySelector('#email');
    let inputAsunto = document.querySelector('#asunto');
    let inputMensaje = document.querySelector('#mensaje');
    let formulario = document.querySelector('#formulario');

    //evento blur cuando salimos del input
    inputEmail.addEventListener('blur',validar);
    inputAsunto.addEventListener('blur',validar);
    inputMensaje.addEventListener('blur',validar);

    function validar(e){
        //para eliminar los espacios
       if(e.target.value.trim()===""){
        mostrarAlerta(`El campo ${e.target.id} es necesario`, e.target.parentElement);
       }else{
        eliminarAlerta(e.target.parentElement);
       if(e.target.id == 'email' && !validarEmail(e.target.value)){
        mostrarAlerta(`El email no es valido`,e.target.parentElement);
        return;
       }
    }
      
    }


    function eliminarAlerta(elemento){
        alerta = elemento.querySelector('.campo-invalido');
        if(alerta){
            alerta.remove();
        }
    }

    function mostrarAlerta(mensaje,referencia){

        let alerta = referencia.querySelector('.campo-invalido');
        if(alerta){
            alerta.remove();
        }
        
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.style.color = 'red';
        error.style.fontStyle = 'italic';
        error.classList.add('campo-invalido');
        //agregandolo en la referencia

        referencia.appendChild(error);

    }

    function validarEmail(email){
        //es una expresión regular
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        console.log(resultado); 
        return resultado;
    }



})