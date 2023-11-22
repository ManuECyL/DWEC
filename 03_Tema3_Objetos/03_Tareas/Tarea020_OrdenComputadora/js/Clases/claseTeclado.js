import { misFunciones } from "../libreria/misFunciones.js";

export class Teclado {

    static contadorTeclados = 0;

    constructor() {
        this._idTeclado = misFunciones.formatearA3cifras(++ Teclado.contadorTeclados);
    }

    get idTeclado() {
        return this._idTeclado;
    }


    toString() {
        return `Teclado nº: T${this.idTeclado}`;
    }
}