/* Crear en el fichero HTML una estructura de botones que simule una calculadora (Número del 0 al 9, suma, resta, multiplicación, división, un botón '=' y un botón 'CE')
    Crear una función que muestre por pantalla el histórico de los datos marcados por el usuario

    TIPS:
        Crear un array vacío
        Añadir los valores introducidos al array (...)
        Utilizar reduce()

*/

const numeros = [];
const historial = document.getElementById('historial');
const datos = document.getElementById('datos');

function insertar(caracter) {
    
    // Si el caracter es un operador, no se añade al input y se mantiene el valor existente
    if (comprobarOperador(caracter)) {
        historial.value +=  datos.value + caracter;
        datos.value = '';
           
    } else if (datos.value == '0') {
        datos.value = caracter;
        
    } else {
        datos.value += caracter;
        numeros.push(caracter);
        console.log(numeros);
    } 
}

// Comprobar si el caracter que se pulsa es un operador
function comprobarOperador(caracter) {

    const operadores = ['+', '-', '*', '/', '='];

    const esOperador = operadores.reduce((acumulador, valorActual) => {       
        return acumulador || valorActual == caracter;
    }, false);

    return esOperador;
}



function sumar() {

    const resultado = numeros.reduce((acumulador, valorActual) => {
        return acumulador + valorActual;
    });

    console.log(resultado);

    datos.value = resultado;
}

function restar() {
    numeros.reduce((acumulador, valorActual) => {
        return acumulador - valorActual;
    }, 0);
}

function multiplicar() {
    numeros.reduce((acumulador, valorActual) => {
        return acumulador * valorActual;
    }, 0);
}

function dividir() {
    numeros.reduce((acumulador, valorActual) => {
        return acumulador / valorActual;
    }, 0);
}


// Función para vaciar los inputs
function limpiar() {
    datos.value = 0;
    historial.value = '';
}


// Función para borrar el último caracter del input
function retroceso() {
    const valor = datos.value; 
    
    // Comprobamos si existe algún caracter en el input
    if (valor.length > 0) {
        datos.value = valor.substring(0, valor.length-1);
    }
}