import { misFunciones } from "../libreria/misFunciones.js";

export class Monitor {

    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++ Monitor.contadorMonitores;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    get marca() {
        return `${misFunciones.nombrePropio(this._marca)}`;
    }

    set marca(marca){
        this._marca = marca;
    }


    get tamaño() {
        return this._tamaño;
    }

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString() {
        return `Monitor nº: M${this.idMonitor} ${this.nombre} ${this.tamaño}`;
    }
}

