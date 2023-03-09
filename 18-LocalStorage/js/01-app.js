
localStorage.setItem('nombre',1);

const producto = {
    nombre: 'TELEVISOR 21\'',
    precio : 300,

}

localStorage.setItem('producto',(producto));

const meses = ['Enero','Febrero','Marzo'];

localStorage.setItem('meses',JSON.stringify(meses));