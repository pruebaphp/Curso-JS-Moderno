let nav = document.querySelector('.navegacion');

//entrando en la navegacion
// click - dar un clic en el elemento
// mouseenter - asoma el clic en el elemento y ocurrira algo

nav.addEventListener('mouseenter',()=>{
    console.log('Entrando en nav');
});

nav.addEventListener('mouseout',()=>{
    console.log('Saliendo en nav');
})