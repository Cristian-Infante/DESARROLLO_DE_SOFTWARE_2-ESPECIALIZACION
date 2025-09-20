import type { ILibro } from "./ILibro.ts";

function mostrarLibro (libro: ILibro): void {
    console.log(`Título: ${libro.titulo}`);
    console.log(`Autor: ${libro.autor?.nombre ?? 'Desconocido'}`);
    console.log(`País del Autor: ${libro.autor?.pais ?? 'Desconocido'}`);
    console.log(`Año de Publicación: ${libro.anioPublicacion ?? 'Desconocido'}`);
    console.log('');
}

const libro1: ILibro = {
    titulo: "Cien Años de Soledad",
    autor: {
        nombre: "Gabriel García Márquez",
        pais: "Colombia"
    },
    anioPublicacion: 1967
};

const libro2: ILibro = {
    titulo: "El Aleph",
    autor: {
        nombre: "Jorge Luis Borges",
        pais: "Argentina"
    }
};

const libro3: ILibro = {
    titulo: "La Sombra del Viento",
    anioPublicacion: 2001
};

mostrarLibro(libro1);
mostrarLibro(libro2);
mostrarLibro(libro3);