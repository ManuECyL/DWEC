import { misFunciones } from "../libreria/misFunciones.js";

export class Monitor {

    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = 'M' + misFunciones.formatearA4cifras(++ Monitor.contadorMonitores);
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
        return `Monitor nº: ${this.idMonitor}, Marca: ${this.marca}, Tamaño: ${this.tamaño}`;
    }
}

