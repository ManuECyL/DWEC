/* EJERCICIO: Haz 3 funciones a las que se le pasa como párametro un array de notas y devuelve la nota media.
    Cada una usará un for de una de las 3 formas vistas */

let notas = [8, 4, 6, 2];

function devuelveMedia1(array) {
    
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += notas[i];
    }
    
    console.log("La media de las notas es = " + (suma/array.length));
    console.log("Notas : " + notas);
    console.log("Suma = " + suma);

    // return (suma/array.length);

}

function devuelveMedia2(array) {

    let suma = 0;

    for (let nota in array) {
        suma += array[nota];
    }

    // return parseFloat(suma/array.length);

    console.log("La media de las notas es = " + (suma/array.length));
    console.log("Notas : " + notas);
    console.log("Suma = " + suma);

}

function devuelveMedia3(array) {

    let suma = 0;

    for (let nota of array) {
        suma += nota;
    }

    // return parseFloat(suma/array.length);

    console.log("La media de las notas es = " + (suma/array.length));
    console.log("Notas : " + notas);
    console.log("Suma = " + suma);
}

devuelveMedia1(notas);
console.log("\n");
devuelveMedia2(notas);
console.log("\n");
devuelveMedia3(notas);