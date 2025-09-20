export class Persona {
    constructor(
        public nombre: string,
        public direccion: string = "Sin dirección"
    ) { }
}

const persona: Persona = new Persona("Juan Pérez", "Calle Falsa 123");
console.log(persona);
const persona2: Persona = new Persona("Ana Gómez");
console.log(persona2);

export class Empleado extends Persona {
    constructor(
        nombre: string,
        direccion?: string,
        public salario: number = 100,
        public puesto: string = "Empleado",
        public empresa: string = "Mi Empresa"
    ) {
        super(nombre, direccion);
    }
}

const empleado: Empleado = new Empleado("Luis Martínez", "Avenida Siempre Viva 456", 3000, "Desarrollador", "Tech Solutions");
console.log(empleado);
const empleado2: Empleado = new Empleado("Marta Sánchez");
console.log(empleado2);