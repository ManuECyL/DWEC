import { misFunciones } from "../libreria/misFunciones.js";

export class Raton {

    static contadorRatones = 0;

    constructor() {
        this._idRaton = misFunciones.formatearA3cifras(++ Raton.contadorRatones);
    }

    get idRaton() {
        return this._idRaton;
    }


    toString() {
        return `Ratón nº: R${this.idRaton}`;
    }
}

