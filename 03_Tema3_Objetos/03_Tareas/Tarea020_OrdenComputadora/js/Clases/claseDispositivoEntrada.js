import { misFunciones } from "../libreria/misFunciones.js";

export class DispositivoEntrada {
   
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }


    get marca() {
        const palabra = misFunciones.nombrePropio((this._marca));
        return `${misFunciones.primeraPalabra(palabra)}`;
    }

    set marca(marca){
        this._marca = marca;
    }
}
