import { Elemento } from "./clases/elemento.js";
import { Texto } from "./clases/texto.js";

let parrafo1 = new Texto('p');
    parrafo1.innerText = 'Lo que queramos';
    parrafo1.agregarPrimero(document.body);

console.log(parrafo1);


let H1 = new Elemento('h1');

console.log(H1);