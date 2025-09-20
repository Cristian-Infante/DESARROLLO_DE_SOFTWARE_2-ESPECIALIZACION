let arreglo = [1, 2, 3, 4, 5];
let arreglo2 = [1, "dos", 3, "cuatro", true];
let caracteristicas = ["Alto", "Inteligente", "Ojos marrones"];

interface IPersona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
    caracteristicas?: string[];
}

let persona: IPersona = {
    nombre: "Juan",
    edad: 30,
    esDesarrollador: true,
    caracteristicas: caracteristicas
};

let persona2: IPersona = {
    nombre: "Ana",
    edad: 25,
    esDesarrollador: false
};

console.log("Arreglo 1:", arreglo);
console.log("Arreglo 2:", arreglo2);
console.log("Persona:", persona);
console.log("Persona 2:", persona2);

export {};