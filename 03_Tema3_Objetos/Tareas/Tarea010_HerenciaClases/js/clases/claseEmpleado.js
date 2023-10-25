import { Persona } from "./clasePersona.js";

export class Empleado extends Persona{

    static contadorEmpleados = 200;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this.id = ++ Empleado.contadorEmpleados;
        this.sueldo = sueldo;
    }

    toString() {
        return `Empleado ${super.toString()} 
            Sueldo: ${(this.sueldo).toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})}`;
    }
}