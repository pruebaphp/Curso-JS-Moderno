
export function mostrarAlerta(mensaje){

    const alerta = document.querySelector('.mensajeAlerta');

    if(!alerta){
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center','mensajeAlerta');

        alerta.innerHTML= mensaje;
        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(()=>{
            alerta.remove();
        },2500)

    }




}