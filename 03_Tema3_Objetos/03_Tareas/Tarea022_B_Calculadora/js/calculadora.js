/* Crear en el fichero HTML una estructura de botones que simule una calculadora (Número del 0 al 9, suma, resta, multiplicación, división, un botón '=' y un botón 'CE')
    Crear una función que muestre por pantalla el histórico de los datos marcados por el usuario

    TIPS:
        Crear un array vacío
        Añadir los valores introducidos al array (...)
        Utilizar reduce()

*/

let numeros = [];
const historial = document.getElementById('historial');
const datos = document.getElementById('datos');

function insertar(caracter) {
    
    // Si el caracter es un operador, no se añade al input y se mantiene el valor existente
    if (esOperador(caracter)) {

        switch (caracter) {
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
        }

        // Condicion para que no se muestren más de dos carcteres en el historial
        if (historial.value.length <= 1) {
            historial.value +=  datos.value + caracter;
        }

        datos.value = '';

        // Verificar que la cadena no esté vacía
        if (historial.value.trim() !== '') {

            // Reiniciamos el array para evitar valores duplicados
            numeros = [];

            // Utilizar split para dividir la cadena por operadores
            const valores = historial.value.split(/[\+\-\*\/\=]/);
        
            // Filtrar los valores para eliminar cadenas vacías o no numéricas
            const numerosValidos = valores.filter(valor => !isNaN(valor) && valor.trim() !== '');
        
            // Agregar los valores al array
            numeros.push(...numerosValidos);
        
            console.log(numeros);
        }
           
    } else if (!isNaN(caracter)) {
        
        if (datos.value == '0') {
            datos.value = caracter;
            
        } else {
            datos.value += caracter;
        
        }
    } 
}


// Comprobar si el caracter que se pulsa es un operador
function esOperador(caracter) {

    const operadores = ['+', '-', '*', '/', '='];

    const esOperador = operadores.reduce((acumulador, valorActual) => {       
        return acumulador || valorActual == caracter;
    }, false);

    return esOperador;
}


function sumar() {

    const resultado = numeros.reduce((acumulador, valorActual) => {
        console.log(acumulador, valorActual);
        return acumulador + valorActual;
    }, 0);

    // datos.value = resultado;
}

function restar() {
    const resultado = numeros.reduce((acumulador, valorActual) => {
        return acumulador - valorActual;
    }, 0);
}

function multiplicar() {
    const resultado = numeros.reduce((acumulador, valorActual) => {
        return acumulador * valorActual;
    }, 0);
}

function dividir() {
    const resultado = numeros.reduce((acumulador, valorActual) => {
        return acumulador / valorActual;
    }, 0);
}


function igual() {
    const resultado = numeros.reduce((acumulador, valorActual) => {
        return acumulador = valorActual;
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