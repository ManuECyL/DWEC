/*
  Consideraciones:  
    • Las bolas son divs rectangulares con border-radius al 50% 
    • El tamaño del div debes calcularlo teniendo en cuenta que el primer argumento del constructor es el radio. 
    • La posición del div en el documento, se consigue con la propiedad CSS position: absolute  
    • Las propiedades top y left se refieren a la esquina superior izquierda del div. Mira en la imagen, estos valores llevan “px” detrás del número. 
    • En un documento del navegador, la coordenadas (1,1) se refieren a la esquina superior izquierda.
*/

import { misFunciones } from "./libreria/misFunciones.js"; 
import { Bola } from "./clases/claseBola.js"; 

/*
  La línea de abajo es un ejemplo de uso de una función de la librería que debes realizar para que cada objeto de la clase Bola tenga un id="idBolaXXX" 
    siendo XXX el número (con tres cifras) de índice en el array de cada objeto.
*/

console.log(misFunciones.formatearA3cifras(5)); // muestra "005" en consola 
 
//constructor(radio, posX, posY, colorBola, linearGradient) 
 
new Bola(85,1,1,'red', 'linear-gradient(to bottom, #2196f3, #009688)'); 
new Bola(55,200,600,'red', 'linear-gradient(to left, #7196f3, #ff9688)');
new Bola(55,400,500,'#f09688'); 
new Bola(60, 250,250,"green");

Bola.arrayBolas.forEach(bola=>bola.visualizar()); 
 
console.log(Bola.arrayBolas);