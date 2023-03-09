
let contenido = document.querySelector('.contenido h1');




//localStorage.setItem('texto','hola desde localStorage');

let texto = localStorage.getItem('texto');

contenido.innerHTML = texto;



