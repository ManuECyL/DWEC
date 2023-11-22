import { misFunciones } from "../libreria/misFunciones.js";
import {DispositivoEntrada} from "./claseDispositivoEntrada.js";

export class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = 'R' + misFunciones.formatearA4cifras(++ Raton.contadorRatones);
    }

    get idRaton() {
        return this._idRaton;
    }


    toString() {
        // return `Ratón nº: ${this.idRaton}${"*".repeat(14)}`;
        return `Ratón nº: ${this.idRaton}`;
    }
}

