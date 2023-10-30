
export class Orden {

    static contadorOrden = 0;

    constructor(producto) {
        this.id = ++ Orden.contadorOrden;
        this.producto = producto;
        // this.total = total + precio; 
    }


    toString() {
        return `___________________
Orden: ${this.id.toLocaleString(undefined,{minimumIntegerDigits: 3, useGrouping: false})}
    ${this.producto.toString()}
---------------`;
    }
}

// Total: ${this.total.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})}