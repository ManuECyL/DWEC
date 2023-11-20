import { Bola } from "./claseBola.js";
import { misFunciones } from "../libreria/misFunciones.js";

export class Pelota extends Bola {
    constructor(radio, posX, posY, colorBola, linearGradient, vx, vy) {
        super(radio, posX, posY, colorBola, linearGradient);
        this._vx = vx;
        this._vy = vy;
    }

    get vx() {
        return this._vx;
    }
    set vx(in_vx) {
        this._vx = in_vx;
    }

    get vy() {
        return this._vy;
    }
    set vy(in_vy) {
        this._vy = in_vy;
    }

    invertirVelocidadesEnParedes() {
        if (this.posX <= 0 || this.posX >= window.innerWidth - 2 * this.radio) {
            this.vx = -this.vx;
        }
        if (this.posY <= 0 || this.posY >= window.innerHeight - 2 * this.radio) {
            this.vy = -this.vy;
        }
    }

    verificarColisionConPelotas(otrasPelotas) {
        otrasPelotas.forEach((otraPelota) => {
            if (otraPelota !== this) {
                const distancia = Math.sqrt(
                    Math.pow(this.posX - otraPelota.posX, 2) + Math.pow(this.posY - otraPelota.posY, 2)
                );

                if (distancia <= this.radio + otraPelota.radio) {
                    // Hay colisión, invertir velocidades
                    this.vx = -this.vx;
                    this.vy = -this.vy;
                }
            }
        });
    }

    mover() {
        this.posX += this.vx;
        this.posY += this.vy;
        this.visualizar();
    }
}
