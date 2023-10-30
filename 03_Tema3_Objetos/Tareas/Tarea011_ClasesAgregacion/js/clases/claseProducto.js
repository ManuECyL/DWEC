export class Producto {

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    toString() {
        return `${nombrePropio(this.nombre)}    ${this.precio.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})}\n\t\t`;
    }
}

function nombrePropio(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}