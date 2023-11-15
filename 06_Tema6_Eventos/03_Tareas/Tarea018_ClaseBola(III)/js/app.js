import { misFunciones } from "./libreria/misFunciones.js"; 
import { Bola } from "./Clases/claseBola.js"; 

function iniciar() {
  console.log("Iniciado");
  const boton = misFunciones.generarBotonCentrado();
  boton.addEventListener("click", nuevaBola);
  // document.body.addEventListener('keydown', misFunciones.escucharTeclas);
}

function nuevaBola() {
  const radio = misFunciones.indiceAleatorioArray(Bola.arrayRadios);
  const posX = misFunciones.generarRandomInt(window.innerHeight-2*radio);
  const posY = misFunciones.generarRandomInt(window.innerWidth-2*radio);
  const colorBola = misFunciones.indiceAleatorioArray(Bola.arrayColor);
  const linearGradient = misFunciones.indiceAleatorioArray(Bola.arrayLinear);

  const nuevaBola = new Bola(radio, posX, posY, colorBola, linearGradient);
  nuevaBola.visualizar();
}

iniciar();

