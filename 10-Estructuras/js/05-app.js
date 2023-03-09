// Switch case

const metodoPago = 'efectivo';

switch(metodoPago){
    case 'efectivo': console.log(`Pagaste con ${metodoPago}`);
    break;

    case 'tarjeta': console.log(`Pagaste con ${metodoPago}`);
    break;

    case 'cheke': console.log(`Pagaste con ${metodoPago}`);
    break;

    default:
        console.log(`Aún no haz seleccionado un método de pago o método de pago no soportado`); break;

}