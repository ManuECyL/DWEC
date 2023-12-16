/* Crear en el fichero HTML una estructura de botones que simule una calculadora (Número del 0 al 9, suma, resta, multiplicación, división, un botón '=' y un botón 'CE')
    Crear una función que muestre por pantalla el histórico de los datos marcados por el usuario

    TIPS:
        Crear un array vacío
        Añadir los valores introducidos al array (...)
        Utilizar reduce()

*/

const numeros = [];

function insertar(num) {

    const valor = $('#historial').val();

    // Si el número es un '=' y ya existe un '=' en el historial, no hace nada
    if (num == '=' && valor.includes('=')) {
        return;

    } else {
        $('#historial').val(valor + num);
    }

    // Si el número es '=', evalúa la operación en el historial
    if (num == '=') {
        const resultado = eval(valor);
        $('#operaciones').val(resultado);
        return;
    }
    
    let verOperacion = $('#operaciones').val();

    // Si el valor es un operador, no se añade al input
    if (num == '+' || num == '-' || num == '*' || num == '/' || num == '=') { 
        $('#operaciones').val(verOperacion);
    
    // Si se introduce otro número, se añade al input #operaciones eliminando el anterior
    } else if (verOperacion.length >= 1) {
        $('#operaciones').val(verOperacion.substring(0,verOperacion.length-1));
        $('#operaciones').val(num);

    } else {
        $('#operaciones').val(verOperacion + num);
        numeros.push(num);
        console.log(numeros);
    } 
}


function sumar() {
    numeros.reduce((acumulador, valorActual) => {
        return $('#operaciones').val(acumulador + valorActual);
    }, 0);
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

function limpiar() {
    $('#operaciones').val(0);
    $('#historial').val('');
}


function retroceso() {
    const valor = $('#operaciones').val(); 
    $('#operaciones').val(valor.substring(0,valor.length-1)); 
}



// function insertar(num) {
//     let valor = $('#operaciones').val(); 
//     $('#operaciones').val(valor + num); 
// }

// function limpiar() {
//     $('#operaciones').val('');
// }



// function igual() {
//     let resultado = eval($('#operaciones').val());
//     $('#operaciones').val(resultado); 
//     console.log(resultado);
//     $('#historial').val(resultado);
// }