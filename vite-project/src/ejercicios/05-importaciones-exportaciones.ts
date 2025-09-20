import { type IProducto, calcularIVA } from "./04-destructurador.ts";

const carrito: IProducto[] = [
    { descripcion: "Telefono 1", precio: 1500 },
    { descripcion: "Telefono 2", precio: 2500 },
    { descripcion: "Telefono 3", precio: 3500 },
    { descripcion: "Telefono 4", precio: 4500 }
];

const [total, totalIVA] = calcularIVA({ productos: carrito, tasaIVA: 0.19, propina: 10 });

console.log("Total:", total);
console.log("Total + IVA + Propina:", totalIVA);

export {};