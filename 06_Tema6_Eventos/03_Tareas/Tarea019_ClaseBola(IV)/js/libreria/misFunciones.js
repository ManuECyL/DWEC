import { Bola } from "../Clases/claseBola.js";
import { Pelota } from "../Clases/clasePelota.js";

let intervalo;
let arrayPelotas = [];


function formatearA3cifras(numero) {
  return ("IdBola"+numero.toLocaleString(undefined,{minimumIntegerDigits: 3, useGrouping: false}));
}


function generarRandomInt(max){
  return Math.floor(Math.random() * max);
}


function generarBotonCentrado() {
  let boton = document.createElement('button');
    boton.innerHTML = "Booola";
    boton.style.position = 'absolute';
    boton.style.left = '50%';
    boton.style.top = '90%';

  document.body.appendChild(boton);

  return boton;
}

function pasarAHexadecimal(num){
    let resultado=num.toString(16);
    //debido a que da problemas con los colores si cada 
    // color no tiene 2 dígitos hexadecimales, hay que añadir 0 por la izda
    if (resultado.length ===1) resultado="0"+resultado;
    if (resultado.length ===0) resultado="00";
    return resultado;
}

function desplazarBola(){
  Bola.arrayBolas.forEach((bola)=>{
      
      const divBola = document.getElementById(bola.id);

      bola.posX = misFunciones.generarRandomInt(window.innerWidth - 2 * bola.radio);
      bola.posY = misFunciones.generarRandomInt(window.innerHeight - 2 * bola.radio);

      divBola.style.left=`${bola.posX}px`;
      divBola.style.top = `${bola.posY}px`;
  });
}


function iniciarMovimiento() {
  intervalo = setInterval(desplazarBola, 50);

}


function pararMovimiento() {
  clearInterval(intervalo);
}


function eliminarBola() {

  if (Bola.arrayBolas.length > 0) {

    const ultimaBola = Bola.arrayBolas[Bola.arrayBolas.length - 1];
    // const ultimaBola = Bola.arrayBolas.pop();

    if (ultimaBola) {

      ultimaBola.eliminar();
      Bola.arrayBolas.pop();  // También elimina la bola del array
    }


  }
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

function generarPelota() {
  let radio = misFunciones.generarRandomInt(79) + 5;
  let posX = misFunciones.generarRandomInt(window.innerWidth - 2 * radio);
  let posY = misFunciones.generarRandomInt(window.innerHeight - 2 * radio);

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

  let vx = misFunciones.generarRandomInt(10) - 5; // Velocidad en el rango [-5, 5]
  let vy = misFunciones.generarRandomInt(10) - 5; // Velocidad en el rango [-5, 5]

  let nuevaPelota = new Pelota(radio, posX, posY, 'cyan', linearGradient, vx, vy);

  arrayPelotas.push(nuevaPelota);

  nuevaPelota.visualizar();
}

export const misFunciones = {
  generarBotonCentrado,
  pasarAHexadecimal,
  formatearA3cifras, 
  generarRandomInt,
  escucharTeclas,
  generarPelota
}