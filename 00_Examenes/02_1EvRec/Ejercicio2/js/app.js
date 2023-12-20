import { Tabla } from "./Clases/tablas.js";

let tabla1 = new Tabla(2,5);
let tabla2 = new Tabla(8,6);

let idExamen = document.getElementById("examen");

tabla1.crearTabla();
tabla2.crearTabla();

tabla1.añadirElemento(idExamen);
tabla2.añadirElemento(idExamen);


let tds = document.getElementsByTagName("td").lastElementChild;
console.log(ultimaCelda);

let tabla3 = new Tabla(1,2);
tabla3.crearTabla();
// tabla3.añadirElemento(ultimaCelda);

function crearBoton() {

    let boton = document.createElement('input');
        boton.setAttribute('type', 'button');
        boton.id = "idBoton"
        boton.value = "Cambiar";

    // Obtenemos el primer hijo del elemento con id "examen"
    let primerElementoIdExamen = idExamen.firstElementChild;

    // Insertamos el boton creado antes del primer hijo del elemento con id "examen"
    return idExamen.insertBefore(boton, primerElementoIdExamen);
}

crearBoton();


