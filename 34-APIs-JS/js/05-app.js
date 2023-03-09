document.addEventListener('visibilitychange',()=>{
    if(document.visibilityState==='visible'){
        console.log('Reproduciendo el video...');
    }else{
        console.log('Pausando el video');

    }
})