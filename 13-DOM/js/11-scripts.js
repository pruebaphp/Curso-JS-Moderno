// const btnFlotante = document.querySelector('.btn-flotante');
// const footer = document.querySelector('.footer');

// btnFlotante.addEventListener('click',mostrarOcultarFooter);
// console.log(footer);

// function mostrarOcultarFooter(){
//     if(footer.classList.contains('activo')){
//         footer.classList.remove('activo');
//         btnFlotante.classList.remove('activo');
//         this.textContent = 'Idioma y Moneda';
//     }else{
//         footer.classList.add('activo');
//         btnFlotante.classList.add('activo');
//         this.textContent = 'x Cerrar';
//     }
 
// }




let botonFlotante = document.querySelector('.btn-flotante');
let footer = document.querySelector('.footer');



botonFlotante.addEventListener('click',function(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        botonFlotante.textContent = 'Idioma y Moneda';
        botonFlotante.classList.remove('activo');
       
    }else{
        footer.classList.add('activo');
        botonFlotante.textContent = 'x Cerrar';
        botonFlotante.classList.add('activo');
    }
    
});