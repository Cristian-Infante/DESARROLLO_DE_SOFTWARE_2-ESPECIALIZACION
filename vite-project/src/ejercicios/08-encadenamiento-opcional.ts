export interface IPasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: IPasajero = {
    nombre: "Juan",
    hijos: ["Ana", "Luis"]
};

const pasajero2: IPasajero = {
    nombre: "María"
};

function imprimeHijos(pasajero: IPasajero): void {
    const numHijos = pasajero.hijos?.length ?? 0;
    console.log(`El pasajero ${pasajero.nombre} tiene ${numHijos} hijo(s).`);
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);
