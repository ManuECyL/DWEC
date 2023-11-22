export class Orden {

    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++ Orden.contadorOrdenes;
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
        ======================== Orden:${this.idOrden} =====================
        ${this.Computadoras.reduce((todos,pc) => todos += pc.toString(),"=============")}

        `;
    }
}