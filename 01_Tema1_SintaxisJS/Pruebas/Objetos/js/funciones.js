let alumno1 = {
    nombre: "Georgi",
    apellido1: "Borisov",
    apellido2: "Alexandrov"
};

let nombreCompleto = "";

for (let propiedad in alumno1) {
    nombreCompleto += alumno1[propiedad] + " ";
}

console.log(nombreCompleto);
console.log("");

/* FORMA ANTIGUA DE DECLARAR UN OBJETO Y SUS ATRIBUTOS

    let alumno = new Object();

    alumno.nombre = 'Carlos';
    alumno[apellidos] = 'Pérez Órtiz';
    alumno.edad = 19;
*/


// FORMA ACTUAL DE DECLARAR UN OBJETO Y SUS ATRIBUTOS

    let alumno = {
        nombre: 'Carlos',
        apellidos: 'Pérez Órtiz',
        edad: 19
    };

    let prop = 'apellidos';
    prop = 'talla';

    console.log(alumno[prop]);

    console.log(alumno.nombre);
    console.log(alumno['nombre']);
    console.log(alumno[prop]);
    
    alumno.talla = {
        max: 205
    };

// Comprueba primero si existe 'alumno.talla' al usar la '?' -> Si no existe saldrá 'undefined' en lugar de error
    console.log(alumno.talla && alumno.talla.max);
    console.log(alumno.talla?.max);
    console.log(alumno);

// Recorrer todas las propiedades de un objeto
    for (let prop in alumno) {
        console.log(prop + ": " + alumno[prop]);
    }