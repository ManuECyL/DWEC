/* Haz una función a la que se le pasa un DNI (ej. 12345678w o 87654321T) y devolverá si es 
correcto o no. La letra que debe corresponder a un DNI correcto se obtiene dividiendo la parte numérica 
entre 23 y cogiendo de la cadena ‘TRWAGMYFPDXBNJZSQVHLCKE’ la letra correspondiente al resto de la 
divisón. Por ejemplo, si el resto es 0 la letra será la T y si es 4 será la G. Prueba la función en la consola con 
tu DNI */

let dni;
let resultado = document.getElementById('resultado');

function validarDNI(dni) {
    dni = document.getElementById("dni").value;
    
    const arrayLetras = "TRWAGMYFPDXBNJZSQVHLCKE";

    let letra = dni.substr(-1).toUpperCase();
    let n = parseInt(dni);

    let resto = n % 23;
    
    let letraResultado = arrayLetras[resto];

    if (letra === letraResultado) {
        resultado.value = "DNI Correcto";
        return true;
    
    } else {
        resultado.value = "DNI Incorrecto";
        return false;
    }
}



// let dni = "12345678Z";
// console.log(`El DNI ${dni} es ${validarDNI(dni)}`);