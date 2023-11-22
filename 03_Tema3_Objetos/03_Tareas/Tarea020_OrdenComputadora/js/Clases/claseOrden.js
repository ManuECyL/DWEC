import { misFunciones } from "../libreria/misFunciones.js";
import { Computadora } from "./claseComputadora.js";

export class Orden {

    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = misFunciones.formatearA4cifras(++ Orden.contadorOrdenes);
        this.Computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        this.Computadoras.push(computadora);
    }
    

    mostrarOrden() {

        return `
        ====================== Orden:${this._idOrden} ======================
        ${this.Computadoras.reduce((todos,pc) => todos += pc.toString())}
        ======================= FIN ============================
        `;//recorre el array de computadoras y muestra el string de cada una de estas
    }

    //Funcion para mostrar la informacion de cada objeto en el formato que quiero.
    toString() {
        return `Orden: ${this._idOrden}`;
    }
}