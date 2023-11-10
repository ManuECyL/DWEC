// function mostrarMensaje() {
//     const mensaje = window.prompt("Escribe tu mensaje", "Buenas tardes");
//     window.alert("Has escrito " + mensaje);
// }

// mostrarMensaje();

//-------------------------------------------------------------------------------

// function potencia(base, exponente) {
//     console.log(base);
//     console.log(exponente);

//     // let valor = base ** exponente;
//     // return valor;

//     return (base ** exponente);
// }

// // let resultado = potencia(2,3);
// // console.log(resultado);

// console.log(potencia(2,3));

//-------------------------------------------------------------------------------

// BUCLE FOR
function sumar() {
    // console.log(arguments.length);
    // console.log(arguments);

    let resultado = 0;

    for (let i = 0; i < arguments.length; i++) {
        resultado += arguments[i];
    }

    return resultado;
}

// sumar("a","b","v","d");
console.log(sumar(5,7));
console.log(sumar());
console.log(sumar(1,520,78,2,6,8,74,84,956,4));

//-------------------------------------------------------------------------------

let cuadrado = function(valor) {
    return valor * valor;
}

console.log(cuadrado(2));

//-------------------------------------------------------------------------------

function aplicarFuncion(dato, funcion_a_aplicar) {
    return funcion_a_aplicar(dato);
}

console.log(aplicarFuncion(7, cuadrado));

//-------------------------------------------------------------------------------

// Función declarada como anónima
let holaMundo = function() {
    console.log("Hola mundo");
}

holaMundo();
holaMundo();
holaMundo();

//-------------------------------------------------------------------------------

// Función declarada como anónima 
let potencia2 = function(base, exponente) {
    return (base ** exponente);
}

console.log(potencia2(4,2));

//-------------------------------------------------------------------------------

// Función declarada como anónima tipo flecha
let potencia3 = (base, exponente) => (base ** exponente);
console.log(potencia3(5,3));

//-------------------------------------------------------------------------------

// Función declarada como anónima tipo flecha con más de una línea de código
let potencia4 = (base, exponente) => {
    let total = 1;
    
    for (let i = 0; i < exponente; i++) {
        total = total * base;
    }

    return total;
}

console.log(potencia4(10,3));

//-------------------------------------------------------------------------------
