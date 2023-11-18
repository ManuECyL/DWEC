import { misFunciones } from "../libreria/misFunciones.js"; 

export class Bola {

    static arrayBolas = [];
    static arrayColores=[];
       
    constructor(radio, posX, posY, colorBola, linearGradient) {
        this.id = `idBola${misFunciones.formatearA3cifras(Bola.arrayBolas.length)}`;
        this._radio = radio;
        this._posX = posX;
        this._posY = posY;
        this._colorBola = colorBola;
        this._linearGradient = linearGradient;
        Bola.arrayBolas.push(this);
    }

    get radio() {
        return this._radio;
    }
    set radio(in_radio) {
        this._radio = in_radio;
    }

    get posX() {
        return this._posX;
    }
    set posX(in_posX) {
        this._posX = in_posX;
    }

    get posY() {
        return this._posY;
    }
    set posY(in_posY) {
        this._posY = in_posY;
    }

    get colorBola() {
        return this._colorBola;
    }
    set colorBola(in_colorBola) {
        this._colorBola = in_colorBola;
    }
	
    get linearGradient() {
        return this._linearGradient;
    }
    set linearGradient(in_linearGradient) {
        this._linearGradient = in_linearGradient;
    }


    visualizar() {
        const bola = document.createElement('div');
            bola.setAttribute('id', this.id);

            bola.style.borderRadius = "50%";
            bola.style.position = "absolute";
            bola.style.width = `${this.radio}px`;
            bola.style.height = `${this.radio}px`;
            bola.style.left = `${this.posX}px`;
            bola.style.top = `${this.posY}px`;
            bola.style.backgroundColor = this.colorBola;
            bola.style.background = this.linearGradient;

        document.body.appendChild(bola);
    }

    eliminar() {
        const divBola = document.getElementById(this.id);
      
        if (divBola) {
            divBola.remove();
        }
      }


}