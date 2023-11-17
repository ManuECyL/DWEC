import { Bola } from "./Clases/claseBola.js";

let intervalo;

function generarBotonCentrado() {
  let boton = document.createElement('button');
  boton.innerHTML = "Booola";
  boton.style.position = 'absolute';
  boton.style.left = '50%';
  boton.style.top = '90%';
  document.body.appendChild(boton);

  return boton;
}

function formatearA3cifras(numero) {
    return ("IdBola"+numero.toLocaleString(undefined,{minimumIntegerDigits: 3, useGrouping: false}));
}

function numeroAleatorio(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}


function indiceAleatorioArray(array) {
  let indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

function generarRandomInt(max){
  return Math.floor(Math.random() * max);
}


function eliminarBola() {

  if (Bola.arrayBolas.length > 0) {
    const ultimaBola = Bola.arrayBolas.pop();

    ultimaBola.eliminar();
  }
}


function desplazarBolas() {
  Bola.arrayBolas.forEach((bola, indice, array) => {
      // bola.desplazar(); // Con método en clase Bola
      
      bola.eliminar();

      let arrayEliminados = Bola.arrayBolas.splice(0,Bola.arrayBolas.length);
      arrayEliminados.forEach((bola) => {
        let nuevaBola = new Bola(bola.radio, bola.posX+10, bola.posY+5, bola.colorBola, bola.linearGradient);
        nuevaBola.visualizar();
      });
      // let divBola = document.getElementById(bola.id);
  });
}


function iniciarMovimiento() {

  intervalo = setInterval(desplazarBolas, 50);

}


function pararMovimiento() {
  clearInterval(intervalo);
}


function escucharTeclas(evento) {
  console.log('Tecla: ' + evento.key);

  switch (evento.key) {

    case 'Delete': // Tecla Suprimir
        eliminarBola();
      break;

    case 'Home': // Tecla Inicio
        iniciarMovimiento();
      break;
  
    case 'End': // Tecla Fin
        pararMovimiento();
      break;

    default:
      break;
  }
}


export const misFunciones = {
  generarBotonCentrado,
  formatearA3cifras, 
  numeroAleatorio,
  indiceAleatorioArray,
  generarRandomInt,
  escucharTeclas
}