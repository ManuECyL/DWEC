
export class Orden {

    static contadorOrden = 0;
    arrayProductos = [];

    constructor() {
        this.id = ++ Orden.contadorOrden;
        this.arrayProductos = [];

        // this.total = total + precio; 
    }
    
    agregarProductos(producto) {
        this.arrayProductos.push(producto);
    }

    toString() {
    return `    ___________________
    Orden: ${this.id.toLocaleString(undefined,{minimumIntegerDigits: 3, useGrouping: false})}
        ${this.arrayProductos}
    ---------------`;}
}


// Total: ${this.total.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})}