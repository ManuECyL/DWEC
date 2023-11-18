import { misFunciones } from "./libreria/misFunciones.js";
import { Pelota } from "./Clases/clasePelota.js";

// let arrayPelotas = [];

function nuevaPelota() {
    misFunciones.generarPelota();
}

document.addEventListener('DOMContentLoaded', function () {
    const boton = misFunciones.generarBotonCentrado();
      boton.innerHTML = "Pelopelopta";
      boton.addEventListener("click", nuevaPelota);
      
    document.body.addEventListener('keydown', misFunciones.escucharTeclas);
});
