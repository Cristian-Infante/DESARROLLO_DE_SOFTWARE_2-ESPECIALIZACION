import type {IPersonaje, IPoder} from "./interfaces.ts";

export function analizarPersonaje(personaje: IPersonaje): void {
    console.log(`Personaje: ${personaje.nombre}`);
    console.log(`Puntos de Vida: ${personaje.pv}`);
    console.log("Poderes:");
    personaje.poderes.forEach((poder: IPoder, index: number) => {
        console.log(`  ${index + 1}. ${poder.nombre} (Nivel: ${poder.nivel}) - ${poder.descripcion}`);
    });
}

export function usarPoder(personaje: IPersonaje, nombrePoder: string): void {
    const poder = personaje.poderes.find(p => p.nombre === nombrePoder);
    if (poder) {
        console.log(`${personaje.nombre} está usando el poder: ${poder.nombre}`);
        poder.usar();
    } else {
        console.log(`${personaje.nombre} no tiene el poder: ${nombrePoder}`);
    }
}