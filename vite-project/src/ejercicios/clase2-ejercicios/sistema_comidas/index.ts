import type { IComida } from "./IComida.ts";
import { ComidaService } from "./ComidaService.ts";
import { NotificadorComida } from "./NotificadorComida.ts";

const comidaService = new ComidaService();
const notificador = new NotificadorComida(comidaService);

const pizza: IComida = { nombre: "Pizza", calorias: 800, esVegana: false };
const ensalada: IComida = { nombre: "Ensalada", calorias: 150, esVegana: true };
const hamburguesa: IComida = { nombre: "Hamburguesa", calorias: 600, esVegana: false };

notificador.notificar(pizza);
notificador.notificar(ensalada);
notificador.notificar(hamburguesa);

comidaService.modificarCalorias(pizza, 500);
notificador.notificar(pizza);