export class Tabla {
    
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;
        this.elemento = document.createElement("table");
        this.arrayCeldas = [];
    }

    crearTabla() {
        // Bucle para crear el número de filas deseado
        for (let i = 0; i < this.filas; i++) {
            let filaTR = document.createElement('tr');
                this.elemento.appendChild(filaTR);
    
            // Bucle para crear el número de columnas deseado
            for (let i = 0; i < this.columnas; i++) {
                let columnaTD = document.createElement('td');
                    filaTR.appendChild(columnaTD);
                    this.arrayCeldas.push(columnaTD);
            }
        }
    }


    añadirElemento(elementoPadre) {
        return elementoPadre.appendChild(this.elemento);
    }
}
