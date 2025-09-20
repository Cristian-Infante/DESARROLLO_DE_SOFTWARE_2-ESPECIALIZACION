interface IDetalle {
    autor: string;
    anio: number;
}

interface IReproductorAudio {
    volumen: number;
    duracion: number;
    cancion: string;
    detalle: IDetalle;
}

let reproductor: IReproductorAudio = {
    volumen: 90,
    duracion: 36,
    cancion: "My Way",
    detalle: {
        autor: "Frank Sinatra",
        anio: 1969
    }
};

// Destructuración
let { volumen, duracion, cancion, detalle: detalles } = reproductor;
let { autor } = detalles;

console.log("Volumen:", volumen);
console.log("Duración:", duracion);
console.log("Canción:", cancion);
console.log("Autor:", autor);

//Arrays
const frutas: string[] = ["Manzana", "Banana", "Cereza"];
const [fruta1, fruta2, fruta3, fruta4 = 'No existe fruta 4'] = frutas;

console.log(`Frutas: ${frutas[0]}, ${frutas[1]}, ${frutas[2]}, ${(frutas[3] || 'No hay cuarta fruta')}`);
console.log(`Frutas Destructuradas: ${fruta1}, ${fruta2}, ${fruta3}, ${fruta4}`);

// Destructuración en parámetros de función
export interface IProducto {
    descripcion: string;
    precio: number;
}

const producto1: IProducto = {
    descripcion: "Telefono 1",
    precio: 1500
};
const producto2: IProducto = {
    descripcion: "Telefono 2",
    precio: 2500
};
const producto3: IProducto = {
    descripcion: "Telefono 3",
    precio: 3500
};

const carritoCompras: IProducto[] = [producto1, producto2, producto3];
const IVA: number = 0.19;

interface IOptionsImpuesto {
    productos: IProducto[];
    tasaIVA: number;
    propina?: number;
}
export function calcularIVA(options: IOptionsImpuesto): number[] {
    const { productos, tasaIVA, propina = 0 } = options;
    let total: number = 0, totalIVA: number = 0;

    productos.forEach(({ precio }) => {
        total += precio;
    });
    totalIVA = total + (total * tasaIVA) + total * (propina / 100);
    return [total, totalIVA];
}

console.log(`Carrito de compras: ${carritoCompras.map(p => p.descripcion).join(', ')}`);
let [totalSinIVA, totalConIVA] = calcularIVA({ tasaIVA: IVA, productos: carritoCompras });
console.log(`Sin propina: Total sin IVA: ${totalSinIVA}, Total con IVA: ${totalConIVA}`);
let [totalSinIVA1, totalConIVA1] = calcularIVA({ tasaIVA: IVA, productos: carritoCompras, propina: 10 });
console.log(`Con propina: Total sin IVA: ${totalSinIVA1}, Total con IVA: ${totalConIVA1}`);



//export {};