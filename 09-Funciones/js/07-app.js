iniciarApp();

function iniciarApp(){
    console.log('Iniciando app...');
    segundaFuncion();
}


function segundaFuncion(){
    console.log("Desde la segunda función...");
    usuarioAutenticado('Juan');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere...');
    console.log(`'Usuairo autenticado exitosamente:' ${usuario} `);
}