let nombre:string = "Juan";
nombre = "Pedro";
const edad:number = 30;

let datoVariable: string | number = 10;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Dato:", datoVariable);
datoVariable = "Hola";
console.log("Dato:", datoVariable);

var pruebaVar = "Soy una variable var";
var pruebaVar = "He sido redeclarada";
console.log(pruebaVar);

let pruebaLet = "Soy una variable let";
// let pruebaLet = "Intento redeclararme"; // Esto causaría un error
pruebaLet = "He sido reasignada";
console.log(pruebaLet);


export {};