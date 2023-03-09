// const primerEnlace = document.querySelector('a');

// primerEnlace.remove();

// console.log(primerEnlace);

//Eliminar desde el padre

//const navegacion = document.querySelector('.navegacion a:nth-child(4)');

const navegacion = document.querySelector('.navegacion');
// const navegacion = document.querySelectorAll('a');
// navegacion[3].remove();

//console.log(navegacion);
//navegacion.remove();

//console.log(navegacion.children[3]);

navegacion.removeChild(navegacion.children[3]);

//navegacion.removeChild(navegacion.children[3]);