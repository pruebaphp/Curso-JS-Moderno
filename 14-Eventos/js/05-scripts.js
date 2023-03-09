window.addEventListener('scroll',()=>{
   const premium = document.querySelector('.premium');
   const ubicacion = premium.getBoundingClientRect();
console.log(ubicacion);

   if(ubicacion.top<835){
    console.log('El elemento ya está visible');
    
   }else{
    console.log('Aún no');
   }
})