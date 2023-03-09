const paises = [];

function nuevoPais(pais,callback){
    paises.push(pais);
    console.log(`Agregando ${pais}`);
    callback();
}


function mostrarPaises(){
    console.log(paises);

}


function iniciarCAllbackHell(){
    setTimeout(() => {
        nuevoPais('Alemania',mostrarPaises);

        setTimeout(() => {
        nuevoPais('Francia',mostrarPaises);
        setTimeout(() => {
            nuevoPais('Inglaterra',mostrarPaises);
                
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCAllbackHell();