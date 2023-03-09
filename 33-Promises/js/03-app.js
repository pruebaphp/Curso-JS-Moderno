const aplicarDescuento = new Promise((resolve,reject)=>{
    //Se ejecutara el resolve cuando el promise se cumpla, caso contrario se ejecutara el reject
    const descuento = false;
    if(descuento){
        resolve('Descuento aplicado');
    }else{
        reject('No se pudo aplicar el descuento');
    }
})


//console.log(aplicarDescuento)
// SE LEE COMO : APLICA DESCUENTO ENTONCES(THEN) MUESTRAME EL RESULTADO
aplicarDescuento
    .then(resultado=>{
        //console.log(resultado);
        descuento(resultado);
    })
    .catch(error=>{
        console.log(error);
    })


    function descuento(resultado){
        console.log(resultado);
    }
 
//Hay 3 valores posibles...
//fulfilled - El promise se cumplió
//rejected - El promise no se cumplió
//pending - Aún no se cumple ni se rechazó