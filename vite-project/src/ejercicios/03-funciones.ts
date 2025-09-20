function saludar(nombre: string): string {
    return `Hola, ${nombre}!`;
}
console.log(saludar("Carlos"));

// Documentación de una función
/**
 * Suma dos valores.
 * @param a - El primer valor a sumar.
 * @param b - El segundo valor a sumar.
 * @returns La suma de a y b.
 */
function sumar(a:any, b:any): any {
    return a + b;
}
console.log("Resultado de la suma:", sumar(5, 10));
console.log("Suma de strings:", sumar("Hola ", "Mundo!"));

const sumarFlecha = (a: number, b: number): number => a + b;
const sumarFlecha2 = (a: number, b: number): number => {
    return a + b
};
console.log("Resultado de la suma flecha:", sumarFlecha(3, 7));
console.log("Resultado de la suma flecha 2:", sumarFlecha2(4, 6));

function multiplicar(numero: number, base: number = 2, otroNumero?: number): number {
    if (otroNumero !== undefined) {
        return numero * base * otroNumero;
    }
    return numero * base;
}
console.log("Multiplicación 1:", multiplicar(5));
console.log("Multiplicación 2:", multiplicar(5, 3));
console.log("Multiplicación 3:", multiplicar(5, 10, 3));

interface IPersonaje {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

const curar = (personaje: IPersonaje, curarX: number) : void => {
    personaje.pv += curarX;
    console.log(`${personaje.nombre} ha sido curado en ${curarX} puntos. HP actual: ${personaje.pv}`);
}

const personaje1: IPersonaje = {
    nombre: "Heroe",
    pv: 50,
    mostrarHp() {
        console.log(`Puntos de vida: ${this.pv}`);
    }
};

console.log("Personaje:", personaje1);
personaje1.mostrarHp();
curar(personaje1, 20);


// Ejercicio: implementar la interfaz para lo siguiente
interface IUsuario{
    id: number,
    nombre: string,
    email: string,
    activo: boolean,
    roles: string[],
    direccion: {
        ciudad: string,
        pais: string
    },
    saludar(): string,
    actualizarEmail: (nuevoEmail: string) => void
}

const usuario1: IUsuario = {
    id: 1,
    nombre: "Ana Pérez",
    email: "ana@example.com",
    activo: true,
    roles: ["admin", "editor"],
    direccion: {
        ciudad: "Bogotá",
        pais: "Colombia"
    },
    saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
    },
    actualizarEmail(nuevoEmail: string) {
        this.email = nuevoEmail;
    }
}

console.log(usuario1);

export {};