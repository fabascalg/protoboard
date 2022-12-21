const dessert = { type: 'pie' };
dessert.type = 'pudding';
const seconds = dessert;
seconds.type = 'fruit';
console.log(dessert);
if (isNaN("d"))
    console.log("no es número");
else
    console.log("es número");
if (isNaN("3"))
    console.log("no es número");
else
    console.log("es número");
/*if ()
    console.log("no es número");
else
    console.log("es número");
*/
const numeros = [40, 100, 1, 5, 25, 10];
console.log(numeros);
numeros.sort((a, b) => a - b);
console.log(numeros);
numeros.sort((a, b) => b - a);
console.log(numeros);
console.log(numeros.sort());
console.log(numeros.reverse());
console.log(numeros.sort((a, b) => a - b));

const usuarios = [
    { nombre: 'Javier', apellido: 'Fernández' },
    { nombre: 'María', apellido: 'Jimenez' },
    { nombre: 'Carmen', apellido: 'Álvarez' },
]

console.log(usuarios);

usuarios.sort((a, b) => a.apellido.localeCompare(b.apellido));

console.log(usuarios);