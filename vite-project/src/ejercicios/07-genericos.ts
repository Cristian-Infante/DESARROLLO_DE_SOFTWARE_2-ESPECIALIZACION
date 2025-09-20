function verTipo(arg: any) {
    return arg;
}

const prueba = verTipo("a");
const prueba1 = verTipo(true);
const prueba2 = verTipo(1);

console.log(prueba);
console.log(prueba1);
console.log(prueba2);

function verTipoGenerico<T>(arg: T): T {
    return arg;
}

let pruebaGenerica = verTipoGenerico("a");
let pruebaGenerica1 = verTipoGenerico(true);
let pruebaGenerica2 = verTipoGenerico(1);

console.log(pruebaGenerica);
console.log(pruebaGenerica1);
console.log(pruebaGenerica2);

interface IMamifero {
    nombre: string;
    genero: string;
    edad: number;
}

const vaca: IMamifero = {
    nombre: "Lola",
    genero: "Hembra",
    edad: 5
};

let pruebaGenerica3 = verTipoGenerico(vaca);
console.log(pruebaGenerica3);