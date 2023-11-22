export class Producto {

    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++ Producto.contadorProductos;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return `${nombrePropio(this._nombre)}`;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }


    get precio() {
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString() {
        return `${this.nombre} ${this.precio.moneda()}`;
    }
}

// Función para devolver un nombre propio de una cadena
function nombrePropio(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

// Función para devolver el resultado de un precio en euros
Number.prototype.moneda = function() {
    return this.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});
}