const producto = 'Monitor de 20 pulgadas';

console.log(producto);
//para reemplazar un texto por algo
console.log(producto.replace('pulgadas','"'))
console.log(producto.replace('Monitor','Monitor curvo'))

// . slice para cortar

console.log(producto.slice(0,10));
console.log(producto.slice(8));

//Alternativa a slice

console.log(producto.substring(0,10));


const usuario = 'Alfonso';

console.log(usuario.slice(0,1));
console.log(usuario.charAt(0));