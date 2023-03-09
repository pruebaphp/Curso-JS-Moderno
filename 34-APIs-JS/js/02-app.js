const premium = document.querySelector('.premium');

document.addEventListener('DOMContentLoaded',()=>{

   // premium.style.display = 'block';
    
    const observer = new IntersectionObserver(entries=>{
     if(entries[0].isIntersecting){
        console.log('Ya está visible');
       // premium.style.display = 'contents';
     }
    });
    //le especificamos que elemento va observar
    observer.observe(document.querySelector('.mi-viaje-plus'));
})