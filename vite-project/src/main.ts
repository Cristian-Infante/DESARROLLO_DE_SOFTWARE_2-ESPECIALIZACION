import './style.css'
import './ejercicios/01-tipo-datos.ts'
import './ejercicios/02-objetos-arreglos.ts'
import './ejercicios/03-funciones.ts'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `Hola Mundo!`;
console.log('Hola Mundo!');