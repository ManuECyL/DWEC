/* Haz una función a la que se le pasa un DNI (ej. 12345678w o 87654321T) y devolverá si es 
correcto o no. La letra que debe corresponder a un DNI correcto se obtiene dividiendo la parte numérica 
entre 23 y cogiendo de la cadena ‘TRWAGMYFPDXBNJZSQVHLCKE’ la letra correspondiente al resto de la 
divisón. Por ejemplo, si el resto es 0 la letra será la T y si es 4 será la G. Prueba la función en la consola con 
tu DNI */

function validarDNI(dni) {
    
    const arrayLetras = "TRWAGMYFPDXBNJZSQVHLCKE";

    let n = parseInt(dni);
    let letra = dni.substring(-1).toUpperCase();

    let resto = n % 23;
    
    let letraResultado = arrayLetras[resto];

    if (letra === letraResultado) {
        return true;
    
    } else {
        return false;
    }
}

if (!validarDNI(dni)) {
    document.getElementById('resultado').value = "DNI Incorrecto"

} else {
    document.getElementById('resultado').value = "DNI Correcto"
}


