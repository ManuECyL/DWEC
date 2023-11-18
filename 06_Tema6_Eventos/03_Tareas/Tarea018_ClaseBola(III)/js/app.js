import { misFunciones } from "./libreria/misFunciones.js"; 
import { Bola } from "./Clases/claseBola.js"; 

// function iniciar() {
//   console.log("Iniciado");
//   const boton = misFunciones.generarBotonCentrado();
//   boton.addEventListener("click", nuevaBola);
//   // document.body.addEventListener('keydown', misFunciones.escucharTeclas);
// }

function nuevaBola() {

  let radio = misFunciones.generarRandomInt(79)+5;
  let posX = misFunciones.generarRandomInt(window.innerWidth - radio);
  let posY = misFunciones.generarRandomInt(window.innerHeight - radio);
  
  let lgAngulo = misFunciones.generarRandomInt(259);

  let lgInicialR = misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
  let lgInicialG = misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
  let lgInicialB = misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
  let colorInicial = `#${lgInicialR}${lgInicialG.toString(16)}${lgInicialB.toString(16)}`;

  let lgFinalR = misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
  let lgFinalG = misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
  let lgFinalB = misFunciones.pasarAHexadecimal(misFunciones.generarRandomInt(255));
  let colorFinal = `#${lgFinalR.toString(16)}${lgFinalG.toString(16)}${lgFinalB.toString(16)}`;
  let linearGradient = `linear-gradient(${lgAngulo}deg,${colorInicial},${colorFinal})`;

  let nuevaBola = new Bola(radio, posX, posY,'cyan',linearGradient);

  // document.getElementById("audio2_bola_nueva").play();

  nuevaBola.visualizar();
}

document.addEventListener('DOMContentLoaded', function(){
    const boton = misFunciones.generarBotonCentrado();
      boton.addEventListener("click",nuevaBola);
      
    document.body. addEventListener('keydown', misFunciones.escucharTeclas);
})

