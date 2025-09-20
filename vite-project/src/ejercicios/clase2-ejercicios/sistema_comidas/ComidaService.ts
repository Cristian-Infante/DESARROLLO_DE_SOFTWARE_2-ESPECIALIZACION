import type {IComida} from "./IComida";

export class ComidaService {
    // Usando destructuración en el parámetro
    mostrarInfo({nombre, calorias, esVegana}: IComida): void {
        console.log(`Comida: ${nombre}, Calorías: ${calorias}, ¿Es vegana?: ${esVegana ? "Sí" : "No"}`);
    }

    modificarCalorias(comida: IComida, nuevasCalorias: number): IComida {
        comida.calorias = nuevasCalorias;
        return comida;
    }
}