import { misFunciones } from "../libreria/misFunciones.js";

export class Elementos {

    static contadorElementos = 0;

    constructor(tag) {
        this._tag = tag;
        this._idElemento = tag.toUpperCase() + "_" + misFunciones.formatearA3cifras(++Elementos.contadorElementos);
    }


    get idElemento() {
        return this._idElemento;
    }

    get tag() {
        return this._tag;
    }

    set tag(tag){
        this._tag = tag;
    }


    agregarPrimerElemento() {

    }

    agregarUltimoElemento() {

    }

    agregarUltimoBody() {
        
    }
}