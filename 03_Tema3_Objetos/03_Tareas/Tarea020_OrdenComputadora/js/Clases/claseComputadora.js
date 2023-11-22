import { misFunciones } from "../libreria/misFunciones.js";

export class Computadora {

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
        this._idComputadora = ++ Computadora.contadorComputadoras;
    }

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return `${misFunciones.nombrePropio(this._nombre)}`;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }


    get monitor() {
        return this._monitor;
    }

    set monitor(monitor){
        this._monitor = monitor;
    }

    get teclado() {
        return this._teclado;
    }

    set teclado(teclado){
        this._teclado = teclado;
    }

    get raton() {
        return this._raton;
    }

    set raton(raton){
        this._raton = raton;
    }

    toString() {
        return `${this.nombre} ${this.monitor} ${this.teclado} ${this.raton}`;
    }
}
