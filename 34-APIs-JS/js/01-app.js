const btnNotificar = document.querySelector('#notificar');

btnNotificar.addEventListener('click',()=>{
    Notification
        .requestPermission()
        .then(resultado=>{
            console.log('El resultado es:', resultado);
        })
});


const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click',()=>{
    if(Notification.permission === 'granted'){
       const notificación = new Notification('Esta es la notificación',{
            icon: 'img/ccj.png',
            body: 'Codigo con Juan, aprende con proyectos reales'
        });
        
        notificación.onclick = ()=>{
            window.open('https://www.codigoconjuan.com')
        }
    }
})