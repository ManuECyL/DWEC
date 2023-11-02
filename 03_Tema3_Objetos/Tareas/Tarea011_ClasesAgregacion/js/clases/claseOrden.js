import { Producto } from "./claseProducto.js";
export class Orden {

    static contadorOrden = 0;
    static MAX_PRODUCTOS = 5;
    arrayProductos = [];

    constructor() {
        this._id = ++ Orden.contadorOrden;
        this.arrayProductos = [];
        Producto.contadorProductos = 0;
    }

    get idOrden() {
        return this._id.toLocaleString(undefined,{minimumIntegerDigits: 3, useGrouping: false});;
    }
    
// Método para añadir productos al ticket
    agregarProductos(producto) {

        if (Producto.contadorProductos >= Orden.MAX_PRODUCTOS) {
            console.log("No caben más productos en la Orden: " + this.idOrden);
        
        } else {
            this.arrayProductos.push(producto);
            Producto.contadorProductos ++;
        }
    }

// Método para obtener el total del precio de todos los productos del ticket
    calcularTotal() {
        return this.arrayProductos.reduce((total, producto) => total += producto.precio,0)
    }

    toString() {
        return `    __________________________________
    Orden ${this.idOrden}:
        - ${this.arrayProductos.reduce((todos,producto) => todos +=`\n\t\t- ${producto.toString()}`)}
    - - - - - - - - - - - - - - - - -
    Total: ${(this.calcularTotal()).moneda()}\n\n`;
    }
}

// Función para devolver el resultado de un precio en euros
Number.prototype.moneda = function() {
    return this.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});
}