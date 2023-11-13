/*
  Consideraciones:  
    • Las bolas son divs rectangulares con border-radius al 50% 
    • El tamaño del div debes calcularlo teniendo en cuenta que el primer argumento del constructor es el radio. 
    • La posición del div en el documento, se consigue con la propiedad CSS position: absolute  
    • Las propiedades top y left se refieren a la esquina superior izquierda del div. Mira en la imagen, estos valores llevan “px” detrás del número. 
    • En un documento del navegador, la coordenadas (1,1) se refieren a la esquina superior izquierda.
*/

import { misFunciones } from "../libreria/misFunciones"; 

export class Bola {

    static contadorBola = 0;

    static arrayBolas = new Array();

    constructor(radio, posX, posY, colorBola, linearGradient) {
        this._idBola = misFunciones.formatearA3cifras(++ Bola.contadorBola);
        this._radio = radio;
        this._posX = posX;
        this._posY = posY;
        this._colorBola = colorBola;
        this._linearGradient = linearGradient;
        arrayBolas.push(Bola);
    }

    get idBola() {
        return this._idBola;
    }

    get radio() {
        return this._radio;
    }

    set radio (radio) {
        this._radio = radio;
    }

    get posX() {
        return this._posX;
    }

    set posX(posX) {
        this._posX = posX;
    }

    get posY() {
        return this._posY;
    }

    set posY(posY) {
        this._posY = posY;
    }

    get colorBola() {
        return this._colorBola;
    }

    set colorBola(colorBola) {
        this._colorBola = colorBola;
    }

    get linearGradient() {
        return this._linearGradient;
    }

    set linearGradient(linearGradient) {
        this._linearGradient = linearGradient;
    }

    toString() {
        return `id = ${this.idBola}`;
    }


    visualizar() {

        let bola = document.createElement('div');

        // bola.setAttribute('id', this.idBola);
        bola.style.borderRadius = "50%";
        bola.style.width = this.radio;
        bola.style.height = this.radio;
        bola.style.top = this.posY;
        bola.style.left = this.posX;
        bola.style.position = "absolute";
        this.style.backgroundColor = this.colorBola;
        this.style.background.linearGradient = this.linearGradient;

        document.body.appendChild(bola);
  
    }
}