let enlace = document.createElement('a');

//Agregandole el texto
enlace.textContent = 'Nuevo Enlace';
//añadiendo href
enlace.href = '/nuevo-enlace';

enlace.target = '_blank';

console.log(enlace);

enlace.classList.add('alguna-clase');

enlace.onclick = miFuncion;

//Seleccionar la navegacion

const navegacion = document.querySelector('.navegacion');
//console.log(navegacion.children);
navegacion.insertBefore(enlace,navegacion.children[1]);


function miFuncion(){
    alert('diste click')
}

//crear un CARD

const parrafo1 = document.createElement('p');

parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');



const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//crear div con la clase de info

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto alternativo';

//creando card

const card = document.createElement('div');
card.classList.add('card');


//asignar la imagen
card.appendChild(imagen);
card.appendChild(info);


//capturando contenedor-cards

let contenedorCards = document.querySelector('.contenedor-cards');

console.log(contenedorCards.children);

//contenedorCards.appendChild(card);

contenedorCards.insertBefore(card,contenedorCards.children[2])




// let precio = document.createElement('p');
// precio.textContent='$800 para samirto';
// precio.classList.add('precio');

// let titulo = document.createElement('p');
// titulo.textContent='Musica de los Andes';
// titulo.classList.add('titulo');

// let categoria = document.createElement('p');
// categoria.textContent = 'Huayno';
// categoria.classList.add('categoria');
// categoria.style.color = 'red';

// let info = document.createElement('div');
// info.classList.add('info');

// info.appendChild(categoria);
// info.appendChild(titulo);
// info.appendChild(precio);



// let imagen = document.createElement('img');
// imagen.src = 'img/hacer3.jpg';


// let card = document.createElement('div');
// card.appendChild(imagen);
// card.appendChild(info);

// console.log(card);

// let contenedorCards = document.querySelector('.contenedor-cards');

// contenedorCards.insertBefore(card,contenedorCards.children[2])

