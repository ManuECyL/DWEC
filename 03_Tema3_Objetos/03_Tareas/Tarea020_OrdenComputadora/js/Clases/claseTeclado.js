import { misFunciones } from "../libreria/misFunciones.js";
import {DispositivoEntrada} from "./claseDispositivoEntrada.js";

export class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada,marca);
        this._idTeclado = 'T' + misFunciones.formatearA4cifras(++ Teclado.contadorTeclados);
    }

    get idTeclado() {
        return this._idTeclado;
    }


    toString() {
        return `Teclado nº: ${this.idTeclado} , Tipo: ${this.tipoEntrada}, Marca:${this.marca}`;
    }
}