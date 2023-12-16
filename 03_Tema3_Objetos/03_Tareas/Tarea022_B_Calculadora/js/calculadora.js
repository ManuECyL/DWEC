/* Crear en el fichero HTML una estructura de botones que simule una calculadora (Número del 0 al 9, suma, resta, multiplicación, división, un botón '=' y un botón 'CE')
    Crear una función que muestre por pantalla el histórico de los datos marcados por el usuario

    TIPS:
        Crear un array vacío
        Añadir los valores introducidos al array (...)
        Utilizar reduce()

*/

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operaciones = ['+', '-', '*', '/', '='];
const historial = [];

function insertar(num) {
    const valor = $('#historial').val(); 
    $('#historial').val(valor + num);
    
    let verOperacion = $('#operaciones').val();

    if (verOperacion != '+' && verOperacion != '-' && verOperacion != '*' && verOperacion != '/' && verOperacion != '=') {
        $('#operaciones').val(verOperacion + num);
        
    }
    
}

function operacion() {
    
    switch (operaciones) {
        case '+':
            sumar();
            break;

        case '-':
            restar();
            break;

        case '*':
            multiplicar();
            break;

        case '/':
            dividir();
            break;

        case '=':
            igual();
            break;

        case 'CE':
            limpiar();
            break;

        default:
            break;
    }
}

function sumar() {
    const suma = numeros.reduce((acumulador, valorActual) => {
        return acumulador + valorActual;
    }, 0);
}

function restar() {
    const resta = numeros.reduce((acumulador, valorActual) => {
        return acumulador - valorActual;
    }, 0);
}

function multiplicar() {
    const multiplicacion = numeros.reduce((acumulador, valorActual) => {
        return acumulador * valorActual;
    }, 0);
}

function dividir() {
    const division = numeros.reduce((acumulador, valorActual) => {
        return acumulador / valorActual;
    }, 0);
}

function limpiar() {
    $('#operaciones').val(0);
    $('#historial').val('');
}

function igual() {
    const resultado = numeros.reduce((acumulador, valorActual) => {
        return acumulador = valorActual;
    }, 0);
}

// function historico() {
//     const historico = numeros.reduce((acumulador, valorActual) => {
//         return acumulador + valorActual;
//     }, 0);
// }

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