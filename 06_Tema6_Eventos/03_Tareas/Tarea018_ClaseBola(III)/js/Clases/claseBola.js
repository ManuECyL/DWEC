import { misFunciones } from "../libreria/misFunciones.js"; 

export class Bola {

    static contadorBola = -1;
    static arrayBolas = [];
       
    static arrayRadios = [50,28,65,72,46,55,35,200,157,31];
    static arrayPosX = [50, 100, 150, 200, 250, 300];
    static arrayPosY = [257, 112, 193, 324, 89, 178];
    static arrayColor = ['green', 'blue', 'yellow', 'black', 'red'];
    static arrayLinear = [
        'linear-gradient(to bottom, #2196f3, #009688)',
        'linear-gradient(to left, #7196f3, #ff9688)',
        'linear-gradient(to right, #22c1c3 , #fdbb2d)',
        'linear-gradient(to bottom, #833ab4 , #fd1d1d)',
        'linear-gradient(to right, #94bbe9 , #eeaeca)'
    ];

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
        this.bola.style.position = "absolute";
        this.bola.style.width = `${this.radio}px`;
        this.bola.style.height = `${this.radio}px`;
        this.bola.style.left = `${this.posX}px`;
        this.bola.style.right = `${this.posY}px`;
        this.bola.style.top = `${this.posY}px`;
        
        if (this.linearGradient) {
            this.bola.style.background = this.linearGradient;

        } else {
            this.bola.style.backgroundColor = this.colorBola;
        }        
    }

    visualizar() {
        document.body.appendChild(this.bola);
    }
}