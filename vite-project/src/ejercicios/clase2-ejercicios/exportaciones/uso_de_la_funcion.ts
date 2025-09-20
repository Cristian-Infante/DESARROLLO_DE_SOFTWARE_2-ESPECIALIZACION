import {analizarPersonaje, usarPoder} from "./funcion.ts";
import type {IPersonaje} from "./interfaces.ts";

const personaje: IPersonaje = {
    nombre: "Gandalf",
    pv: 100,
    poderes: [
        {
            nombre: "Bola de Fuego",
            tipo: "Magia",
            descripcion: "Lanza una bola de fuego que causa daño en un área.",
            nivel: 5,
            usar: () => console.log("¡Bola de Fuego lanzada!")
        },
        {
            nombre: "Escudo Mágico",
            tipo: "Defensa",
            descripcion: "Crea un escudo que reduce el daño recibido.",
            nivel: 3,
            usar: () => console.log("¡Escudo Mágico activado!")
        }
    ]
};

analizarPersonaje(personaje);
usarPoder(personaje, "Bola de Fuego");
usarPoder(personaje, "Teletransportación");

export {};