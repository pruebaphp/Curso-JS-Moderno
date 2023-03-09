
const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM D YYYY H:mm:ss a'));
console.log(moment().format('LLLL',diaHoy));