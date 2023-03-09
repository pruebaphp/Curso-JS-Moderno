// const categoriasSelect = document.querySelector('#categorias');
// const resultado = document.querySelector('#resultado');
// const modal = new bootstrap.Modal('#modal',{});
// let recetasFavorito = [];

// window.onload = ()=>{
//     cargarCategorias();
//     eventListeners();
// }

// function eventListeners(){
//     categoriasSelect.addEventListener('change',obtenerComidas);
// }

// function obtenerComidas(){

//     let nombreCategoria = categoriasSelect.value;
//     console.log(nombreCategoria);
//     consultarComidas(nombreCategoria);

// }

// function consultarComidas(nombre){
//     let urlComidas = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${nombre}`;
//     fetch(urlComidas)
//         .then(respuesta=>respuesta.json())
//         .then(data=>mostrarRecetas(data.meals))
// }

// function mostrarRecetas(platos){
//      //   console.log(platos);
//      resultado.innerHTML = '';

//      const heading = document.createElement('H2');
//      heading.classList.add('text-center','text-black','my-5');

//      if(platos.length===0){
//         heading.textContent = 'No hay resultados';
//      }else{
//         heading.textContent = 'Resultados';
//      }

//      resultado.appendChild(heading);

//     platos.forEach(platos=>{
//         const recetasContenedor = document.createElement('div');
//         recetasContenedor.classList.add('col-md-4');

//         const recetaCard = document.createElement('div');
//         recetaCard.classList.add('card','mb-4');

//         const recetaImagen = document.createElement('img');
//         recetaImagen.classList.add('card-img-top');
//         recetaImagen.src = `${platos.strMealThumb}`;
//         recetaImagen.alt = `Imagen del platillo: ${platos.strMeal}`;

//         const recetaCardBody = document.createElement('div');
//         recetaCardBody.classList.add('card-body');

//         const recetaHeading = document.createElement('h3');
//         recetaHeading.classList.add('card-title','mb-3');
//         recetaHeading.textContent = platos.strMeal;

//         const recetaButton = document.createElement('button');
//         recetaButton.classList.add('btn','btn-danger','w-100');
//         recetaButton.textContent = 'Ver receta';
//         recetaButton.setAttribute('data-idReceta',`${platos.idMeal}`);
//         recetaButton.onclick = ()=>{
//             seleccionarReceta(platos.idMeal);
//         };
//         recetaButton.dataset.bsTarget = '#modal';
//         recetaButton.dataset.bsToggle = 'modal';

//         recetaCardBody.appendChild(recetaHeading);
//         recetaCardBody.appendChild(recetaButton);

//         recetaCard.appendChild(recetaImagen);
//         recetaCard.appendChild(recetaCardBody);

//         recetasContenedor.appendChild(recetaCard);

//         resultado.appendChild(recetasContenedor);


//     })
// }

// function seleccionarReceta(id){
//    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
//    fetch(url)
//         .then(respuesta=>respuesta.json())
//         .then(data=>mostrarRecetaModal(data.meals[0]))
// }

// function mostrarRecetaModal(receta){
//     //Muestra el modal
//     const {idMeal,strInstructions,strMeal,strMealThumb} = receta;
//     const modalTittle = document.querySelector('.modal .modal-title');
//     const modalBody = document.querySelector('.modal .modal-body');

//     modalTittle.innerHTML = '';
//     modalBody.innerHTML = '';

//     modalTittle.textContent = strMeal;
//     modalBody.innerHTML = `
//         <img class= "img-fluid" src="${strMealThumb}" alt="Receta ${strMeal}">
//         <h3 class="mt-3">Instrucciones</h3>
//         <p>${strInstructions}</p>
//         <h3 class="mt-3">Ingredientes y cantidades</h3>

//     `;

//     const listGroup = document.createElement('ul');
//     listGroup.classList.add('list-group');

//     //Mostrar cantidades e ingredientes
//     for(let i=1; i<=20; i++){
//        if(receta[`strIngredient${i}`]){
//             const ingrediente = receta[`strIngredient${i}`];
//             const cantidad = receta[`strMeasure${i}`];
            
//             const ingredienteLi = document.createElement('li');
//             ingredienteLi.classList.add('list-group-item');
//             ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;
//             listGroup.appendChild(ingredienteLi);
            
//        }
//     }

//     modalBody.appendChild(listGroup);

//     const modalFooter = document.querySelector('.modal-footer');
//     const botonFavorito = document.querySelector('.btnFavorito');
//     if(botonFavorito){
//         botonFavorito.remove();
//     }
//     const btnFavorito = document.createElement('button');
//     btnFavorito.classList.add('btn','btn-danger','col','btnFavorito');

//     console.log(validarSiExisteEnFavoritos(idMeal));

//     if(validarSiExisteEnFavoritos(idMeal)){
//         btnFavorito.textContent = 'Eliminar Favorito';
//         btnFavorito.onclick = function(){
//             borrarFavorito(idMeal);
//     }

//     }else{
//         btnFavorito.textContent = 'Guardar Favorito';
//            btnFavorito.onclick = function(){
//             guardarFavorito(receta);
//     }
//     }

//    // console.log(modalFooter.children);
//     modalFooter.insertBefore(btnFavorito,modalFooter.children[0]);
    
//     console.log(receta);
//   //  modal.show();
// }

// function borrarFavorito(id){
//     recetasFavorito = recetasFavorito.filter(e=>{Number(e.id)!==Number(id)});
//     localStorage.setItem('favoritos',JSON.stringify(recetasFavorito));
// }

// function validarSiExisteEnFavoritos(idReceta){
//     let existe = false;
//     recetasFavorito.forEach(receta=>{
//         if(Number(receta.id) === Number(idReceta)){
//             existe = true;
//         }
//     })

//     return existe;
// }

// function guardarFavorito(receta){
//     let objetoFavorito = {
//         id: receta.idMeal,
//         titulo: receta.strMeal,
//         img: receta.strMealThumb,

//     }
//     recetasFavorito.push(objetoFavorito);
//     localStorage.setItem('favoritos',JSON.stringify(recetasFavorito));
//     console.log(recetasFavorito);
// }

// function cargarCategorias(){
//     urlCategorias = 'https://www.themealdb.com/api/json/v1/1/categories.php';
//     fetch(urlCategorias)
//         .then(respuesta=>respuesta.json())
//         .then(data=>cargarHTMLCategorias(data.categories));
// }

// function cargarHTMLCategorias(data){
//     console.log(data);
//     data.forEach((categoria)=>{

//         const {idCategory,strCategory,strCategoryThumb,strCategoryDescription} = categoria;
//         let option = document.createElement('option');
//         option.value = strCategory;
//         option.textContent = strCategory;
        
//         categoriasSelect.appendChild(option);

//     });
// };


const categoriasSelect = document.querySelector('#categorias');
const resultado = document.querySelector('#resultado');
const modal = new bootstrap.Modal('#modal',{});
const favoritosDiv = document.querySelector('.favoritos');
let recetasFavorito = [];

window.onload = ()=>{
    cargarCategorias();
    eventListeners();
}

function eventListeners(){
    if(categoriasSelect){
        categoriasSelect.addEventListener('change',obtenerComidas);
    }

    if(favoritosDiv){
        obtenerFavoritos();
    }
   
}

function obtenerComidas(){

    let nombreCategoria = categoriasSelect.value;
    console.log(nombreCategoria);
    consultarComidas(nombreCategoria);

}

function consultarComidas(nombre){
    let urlComidas = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${nombre}`;
    fetch(urlComidas)
        .then(respuesta=>respuesta.json())
        .then(data=>mostrarRecetas(data.meals))
}

function mostrarRecetas(platos){
     //   console.log(platos);
     resultado.innerHTML = '';

     const heading = document.createElement('H2');
     heading.classList.add('text-center','text-black','my-5');

     if(platos.length===0){
        heading.textContent = 'No hay resultados';
     }else{
        heading.textContent = 'Resultados';
     }

     resultado.appendChild(heading);

    platos.forEach(platos=>{
        const recetasContenedor = document.createElement('div');
        recetasContenedor.classList.add('col-md-4');

        const recetaCard = document.createElement('div');
        recetaCard.classList.add('card','mb-4');

        const recetaImagen = document.createElement('img');
        recetaImagen.classList.add('card-img-top');
        recetaImagen.src = platos.strMealThumb || platos.img;
        recetaImagen.alt = `Imagen del platillo: ${platos.strMeal || platos.titutlo} `;

        const recetaCardBody = document.createElement('div');
        recetaCardBody.classList.add('card-body');

        const recetaHeading = document.createElement('h3');
        recetaHeading.classList.add('card-title','mb-3');
        recetaHeading.textContent = platos.strMeal || platos.titulo;

        const recetaButton = document.createElement('button');
        recetaButton.classList.add('btn','btn-danger','w-100');
        recetaButton.textContent = 'Ver receta';
        recetaButton.setAttribute('data-idReceta',`${platos.idMeal}`);
        recetaButton.onclick = ()=>{
            seleccionarReceta(platos.idMeal || platos.id);
        };
        recetaButton.dataset.bsTarget = '#modal';
        recetaButton.dataset.bsToggle = 'modal';

        recetaCardBody.appendChild(recetaHeading);
        recetaCardBody.appendChild(recetaButton);

        recetaCard.appendChild(recetaImagen);
        recetaCard.appendChild(recetaCardBody);

        recetasContenedor.appendChild(recetaCard);

        resultado.appendChild(recetasContenedor);


    })
}

function seleccionarReceta(id){
   const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
   fetch(url)
        .then(respuesta=>respuesta.json())
        .then(data=>mostrarRecetaModal(data.meals[0]))
}

function mostrarRecetaModal(receta){
    //Muestra el modal
    const {idMeal,strInstructions,strMeal,strMealThumb} = receta;
    const modalTittle = document.querySelector('.modal .modal-title');
    const modalBody = document.querySelector('.modal .modal-body');

    modalTittle.innerHTML = '';
    modalBody.innerHTML = '';

    modalTittle.textContent = strMeal;
    modalBody.innerHTML = `
        <img class= "img-fluid" src="${strMealThumb}" alt="Receta ${strMeal}">
        <h3 class="mt-3">Instrucciones</h3>
        <p>${strInstructions}</p>
        <h3 class="mt-3">Ingredientes y cantidades</h3>

    `;

    const listGroup = document.createElement('ul');
    listGroup.classList.add('list-group');

    //Mostrar cantidades e ingredientes
    for(let i=1; i<=20; i++){
       if(receta[`strIngredient${i}`]){
            const ingrediente = receta[`strIngredient${i}`];
            const cantidad = receta[`strMeasure${i}`];
            
            const ingredienteLi = document.createElement('li');
            ingredienteLi.classList.add('list-group-item');
            ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;
            listGroup.appendChild(ingredienteLi);
            
       }
    }

    modalBody.appendChild(listGroup);

    const modalFooter = document.querySelector('.modal-footer');
    const botonFavorito = document.querySelector('.btnFavorito');
    if(botonFavorito){
        botonFavorito.remove();
    }
    const btnFavorito = document.createElement('button');
    btnFavorito.classList.add('btn','btn-danger','col','btnFavorito');
    btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar favorito';

    
        btnFavorito.onclick = function(){

            if(existeStorage(idMeal)){
                
                btnFavorito.textContent = 'Guardar Favorito';
                mostrarAlerta(`Receta eliminada de favoritos con éxito`);
                eliminarFavorito(idMeal);
              
            }else{
                btnFavorito.textContent = 'Eliminar Favorito';
                mostrarAlerta(`Receta guardada a favoritos con éxito`);
                guardarFavorito(receta);
            }
    

         
        }
    

   // console.log(modalFooter.children);
    modalFooter.insertBefore(btnFavorito,modalFooter.children[0]);
    
    console.log(receta);
  //  modal.show();
}

function mostrarAlerta(mensaje){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${mensaje}`,
        showConfirmButton: false,
        timer: 2500
      })

    let swalAlert = document.querySelector('.swal2-title');

    swalAlert.style.fontSize = '18px';
}

function eliminarFavorito(id){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const nuevosFavoritos = favoritos.filter(favorito => Number(favorito.id) !== Number(id));
    localStorage.setItem('favoritos',JSON.stringify(nuevosFavoritos));

    if(favoritosDiv){
        mostrarRecetas(nuevosFavoritos);
    }

}



function guardarFavorito(receta){
    let objetoFavorito = {
        id: receta.idMeal,
        titulo: receta.strMeal,
        img: receta.strMealThumb,

    }
   
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    //tomamos una copia del arreglo favoritos ...favoritos y añadimos la receta
    localStorage.setItem('favoritos',JSON.stringify([...favoritos,objetoFavorito]));

    if(favoritosDiv){
        const favoritosActualizado = JSON.parse(localStorage.getItem('favoritos')) || [];
  //      console.log(favoritos2);
        mostrarRecetas(favoritosActualizado);
    }


    
}

function existeStorage(id){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    return favoritos.some(e=>Number(e.id) === Number(id));
}

function cargarCategorias(){
    urlCategorias = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    fetch(urlCategorias)
        .then(respuesta=>respuesta.json())
        .then(data=>cargarHTMLCategorias(data.categories));
}

function cargarHTMLCategorias(data){
    //console.log(data);
    data.forEach((categoria)=>{

        const {idCategory,strCategory,strCategoryThumb,strCategoryDescription} = categoria;
        let option = document.createElement('option');
        option.value = strCategory;
        option.textContent = strCategory;
        if(categoriasSelect){
        categoriasSelect.appendChild(option);
        }
    });
};

function obtenerFavoritos(){
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) ||  [];
    //console.log(favoritos);
    if(favoritos.length){
        mostrarRecetas(favoritos);
        return;
    }

    const noFavoritos = document.createElement('p');
    noFavoritos.textContent = 'No hay favoritos aún';
    noFavoritos.classList.add('fs-4','text-center','font-bold','mt-5');
    resultado.appendChild(noFavoritos);
}