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
        return `${misFunciones.nombrePropio(this._marca)}`;
    }

    set marca(marca){
        this._marca = marca;
    }

    toString() {
        return `${this.tipoEntrada} ${this.marca}`;
    }
}