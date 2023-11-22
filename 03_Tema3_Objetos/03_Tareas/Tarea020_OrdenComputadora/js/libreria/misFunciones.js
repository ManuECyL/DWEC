function formatearA4cifras(numero) {
    return (numero.toLocaleString(undefined,{minimumIntegerDigits: 4, useGrouping: false}));
}

// Función para devolver un nombre propio de una cadena
function nombrePropio(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

//Funcion para sacar solo la primera palabra de la marca
function primeraPalabra(cadena) {

    let palabra = cadena.split(' ');
    return palabra[0];
}


export const misFunciones = {
    formatearA4cifras, 
    nombrePropio,
    primeraPalabra
  }