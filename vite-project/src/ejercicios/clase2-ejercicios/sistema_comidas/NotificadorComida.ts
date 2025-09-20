import { ComidaService} from "./ComidaService.ts";
import type {IComida} from "./IComida.ts";

export class NotificadorComida {
    constructor(private comidaService: ComidaService) {}

    notificar(comida: IComida): void {
        console.log("Notificando comida...");
        this.comidaService.mostrarInfo(comida);
    }
}