import type {IComida} from "../sistema_comidas/IComida.ts";

export function creaCaja<T>(generico: T): { contenido: T } {
    return { contenido: generico  };
}

const cajaDeString = creaCaja("Hola");
const cajaDeNumero = creaCaja(123);
const cajaDeBooleano = creaCaja(true);
const comida: IComida = {
    nombre: "Hamburguesa",
    calorias: 800,
    esVegana: false
};
const cajaDeComida = creaCaja(comida);

console.log(cajaDeString);
console.log(cajaDeNumero);
console.log(cajaDeBooleano);
console.log(cajaDeComida);