export interface ILibro {
    titulo: string;
    autor?: {
        nombre?: string;
        pais?: string;
    }
    anioPublicacion?: number;
}