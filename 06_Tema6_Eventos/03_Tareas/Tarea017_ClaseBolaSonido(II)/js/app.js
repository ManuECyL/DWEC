import { misFunciones } from "./libreria/misFunciones.js"; 
import { Bola } from "./Clases/claseBola.js"; 

// Bola.arrayBolas.forEach(bola => bola.visualizar()); 


let boton = document.createElement('button');
  boton.innerHTML = "Booola";
  boton.style.position = 'absolute';
  boton.style.left = '50%';
  boton.style.top = '90%';
  document.body.appendChild(boton);

  
boton.addEventListener("click", function() {
    const radio = misFunciones.indiceAleatorioArray(Bola.arrayRadios);
    const posX = misFunciones.indiceAleatorioArray(Bola.arrayPosX);
    const posY = misFunciones.indiceAleatorioArray(Bola.arrayPosY);
    const colorBola = misFunciones.indiceAleatorioArray(Bola.arrayColor);
    const linearGradient = misFunciones.indiceAleatorioArray(Bola.arrayLinear);

    const nuevaBola = new Bola(radio, posX, posY, colorBola, linearGradient);
    nuevaBola.visualizar();

    let audio = document.createElement("audio");
    audio.setAttribute("src", "./Sonidos/Claxon.mp3");
    audio.play();
});
