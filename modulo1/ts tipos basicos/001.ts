let verdadero:boolean=true;

console.log(verdadero);

let numero:number=3.14;

console.log(++numero);

let texto:string="hola que tal...";

console.log(texto);

let lista:string[]=["hola","que","tal"];
console.dir(lista);
console.log(lista);


let tupla2:[number, string, string, number]=[10,"Pedro","Pérez",56];

tupla2.forEach((e) => {
    console.log(e);
});

enum Color {Azul, Rojo, Verde};

let color1 = Color.Azul;
let color2 = Color.Azul;
let color3 = Color.Rojo;

if (color1 == color2){
    console.log("colores iguales");
}
/* esto da error
if (color2 == color3){
    console.log("colores iguales");
} else
{
    console.log("colores distintos");
}
*/
console.log(Color.Azul);
console.log(Color.Rojo);
console.log(Color.Verde);

let mivariable:any="hola";
console.log(mivariable);
mivariable=5;
console.log(mivariable+1);