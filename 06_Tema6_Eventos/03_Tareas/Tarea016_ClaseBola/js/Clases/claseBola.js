/*
  Consideraciones:  
    • Las bolas son divs rectangulares con border-radius al 50% 
    • El tamaño del div debes calcularlo teniendo en cuenta que el primer argumento del constructor es el radio. 
    • La posición del div en el documento, se consigue con la propiedad CSS position: absolute  
    • Las propiedades top y left se refieren a la esquina superior izquierda del div. Mira en la imagen, estos valores llevan “px” detrás del número. 
    • En un documento del navegador, la coordenadas (1,1) se refieren a la esquina superior izquierda.
*/

import { misFunciones } from "../libreria/misFunciones.js"; 

export class Bola {

    static contadorBola = -1;
    static arrayBolas = []   

    constructor(radio, posX, posY, colorBola, linearGradient) {
        this.idBola = misFunciones.formatearA3cifras(++ Bola.contadorBola);
        this.radio = radio;
        this.posX = posX;
        this.posY = posY;
        this.colorBola = colorBola;
        this.linearGradient = linearGradient;
        this.crearBola();
        Bola.arrayBolas.push(this);
    }


    crearBola() {
        this.bola = document.createElement('div');

        this.bola.id = `idBola${this.idBola}`;
        this.bola.style.borderRadius = "50%";
        this.bola.style.width = `${this.radio}px`;
        this.bola.style.height = `${this.radio}px`;
        this.bola.style.top = `${this.posY}px`;
        this.bola.style.left = `${this.posX}px`;
        this.bola.style.position = "absolute";
        
        if (this.linearGradient) {
            this.bola.style.background = this.linearGradient;

        } else {
            this.bola.style.backgroundColor = this.colorBola;
        }        
    }

    toString() {
        return `id = ${this.idBola}`;
    }


    visualizar() {
        document.body.appendChild(this.bola);
    }
}