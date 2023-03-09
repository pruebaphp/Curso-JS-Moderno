const producto = '            Monitor de 20 pulgadas                ';

console.log(producto);
console.log(producto.length);


//Eliminando los espacios del inicio y al final

console.log(producto.trimStart());
console.log(producto.trimEnd());

//usando los métodos de forma encadenada
console.log(producto.trimStart().trimEnd());
w
//para cortar en ambos lados
console.log(producto.trim());
