// Funciones Anónimas -> función sin darle un nombre
let potencia = function() {
    
    let base = 2;
    let exponente = 3;

    let resultado = 1;

    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }

    return resultado;

    // return Math.pow(base, exponente);
}

let resultado = potencia();
console.log(resultado);

// Función Normal con Parámetros
let potencia2 = function(base, exponente) {

    let valor = 1;

    for (let i = 1; i <= exponente; i++) {
        valor = valor * base;
    }

    return valor;

    // return Math.pow(base, exponente);
}

let valor = potencia2(2,4);
console.log(valor);


// Función Flecha/Arrow con Parámetros
let potencia3 = (base,exponente) => {

    let valor = 1;

    for (let i = 1; i <= exponente; i++){
        valor = valor * base
    }

    return valor

    // return Math.pow(base, exponente);
}

let valor2 = potencia3(2,4);
console.log(valor2);