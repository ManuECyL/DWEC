import { Persona } from "./clasePersona.js";

export class Cliente extends Persona{

    static contadorClientes = 300;

    constructor(nombre, apellido, edad, registro) {
        super(nombre, apellido, edad);
        this.id = ++ Cliente.contadorClientes;
        this.registro = registro;
    }

    toString() {
        return `Cliente ${super.toString()} 
            Registro: ${(this.registro).toLocaleDateString()}`;
    }
}