export interface IPoder {
    nombre: string;
    tipo: string;
    descripcion: string;
    nivel: number;
    usar: () => void;
}
export interface IPersonaje {
    nombre: string;
    pv: number;
    poderes: IPoder[];
}

