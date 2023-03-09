

document.addEventListener('DOMContentLoaded',function(){

    const objetoMail = {
        email: '',
        asunto: '',
        mensaje: '',
    }

    //capturando los elementos
    let strEmail = document.querySelector('#email');
    let strAsunto = document.querySelector('#asunto');
    let strMensaje = document.querySelector('#mensaje');
    let btnSubmit = document.querySelector('#formulario button[type="submit"]');
    let btnReset = document.querySelector('#formulario button[type="reset"]');
    let formulario = document.querySelector('#formulario');
    let spinner = document.querySelector('#spinner');

    //asignando un evento

    strEmail.addEventListener('input',validarCampo);
    strAsunto.addEventListener('input',validarCampo);
    strMensaje.addEventListener('input',validarCampo);
    formulario.addEventListener('submit', enviarEmail);
    btnReset.addEventListener('click', function(e){
       

        objetoMail.email='';
        objetoMail.asunto = '';
        objetoMail.mensaje = '';

        comprobarObjetoEmail();
    })

    function enviarEmail(e){
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            objetoMail.email='';
            objetoMail.asunto = '';
            objetoMail.mensaje = '';
            
            formulario.reset();
            comprobarObjetoEmail();

            //Crear una laerta
            const alertaExito = document.createElement('p');
            alertaExito.textContent = 'Mensaje enviado correctamente';
            alertaExito.style.color = 'red';
            alertaExito.style.fontStyle = 'italic';
            alertaExito.style.textAlign = 'center';
            formulario.appendChild(alertaExito);
            

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);


        }, 3000);
    }
    
    function validarCampo(e){
        if(e.target.value.trim() === ""){
          //  console.log(e.target.parentElement);
           crearAlerta(e.target.parentElement,`El campo ${e.target.id} es necesario.`);
           objetoMail[e.target.name] = e.target.value.trim().toLowerCase()
            comprobarObjetoEmail();
           return;
        }

        if(e.target.id==="email" && !verificarEmail(e.target.value)){
            
            crearAlerta(e.target.parentElement,`El email no es válido.`);
            objetoMail[e.target.name] = e.target.value.trim().toLowerCase()
            comprobarObjetoEmail();
            return;
        }
        
        eliminarAlerta(e.target.parentElement);
        
        //Asignar los valores al objeto

        objetoMail[e.target.name] = e.target.value.trim().toLowerCase();
        
        //Comprobar el objeto de email
        comprobarObjetoEmail();
       
       
    };

    function crearAlerta(elementoPadre,mensaje){

        eliminarAlerta(elementoPadre);

        let alerta = document.createElement('p');
        alerta.textContent = mensaje;
        alerta.style.color = 'red';
        alerta.style.fontStyle = 'italic';
        alerta.classList.add('campoIncorrecto');
        elementoPadre.appendChild(alerta);
    }

    function eliminarAlerta(elementoPadre){
        alerta = elementoPadre.querySelector('.campoIncorrecto');
       if(alerta){
        alerta.remove();
       }
    }

    function verificarEmail(email){
        //expresion regular 
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        let respuesta = regex.test(email);
        return respuesta;
    }

    function comprobarObjetoEmail(){
        console.log(Object.values(objetoMail).includes(''));
       if(!Object.values(objetoMail).includes('')){
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
       }else{
        btnSubmit.classList.add('opacity-50');
        btnSubmit.disabled = true;
       };
        
    }




});