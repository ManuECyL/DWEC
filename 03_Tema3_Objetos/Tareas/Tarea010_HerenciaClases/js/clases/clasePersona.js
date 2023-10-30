export class Persona {

    static contadorPersonas = 100;
    // static maxPersonas = 7;
    
    static get MAX_PERSONAS() {
        return 106;
    }

    constructor(nombre, apellido, edad) {
        
        if (Persona.MAX_PERSONAS < Persona.contadorPersonas) {
            console.log("AVISO: Hay más de 6 objetos creados");
        }

        this.id = ++ Persona.contadorPersonas;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

        // if (Persona.maxPersonas <= 0) {
        //     console.log("AVISO: Hay más de 6 objetos creados");
        // }

        // Persona.maxPersonas --;
    }

    // get nombre() {
    //     return this._nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
    // }
    
    // set nombre(nombre) {
    //     this._nombre = nombre.toUpperCase();
    // }

    toString() {
        return `${this.id}:
            Nombre: ${nombrePropio(this.nombre)} ${nombrePropio(this.apellido)}
            Edad: ${this.edad}`;
    }
}

function nombrePropio(nombre) {

    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}


