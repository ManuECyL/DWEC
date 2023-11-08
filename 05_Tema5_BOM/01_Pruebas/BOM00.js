console.log("bom1");

// const idTimeout = setTimeout(() => console.log('Timeout que se ejecuta al cabo de 1 seg.'), 1000);

function muestraMensaje() {
    console.log("Timeout que se ejecuta al cabo de 1 seg.");
}

const idTimeout = setTimeout(muestraMensaje, 1000); // muestraMensaje es función callback. Si le pusiesemos los paréntesis, la ejecutaría en el momento en el que la lee y no transcurrido el tiempo indicado.


function muestraMensaje2(mensaje) {
    console.log(mensaje);    
}

const idTimeout2 = setTimeout(muestraMensaje2, 2000, "Hola majos"); // Los parámetros, en este caso 'mensaje', de la función se definen al final


console.log("bom2");

let i = 0;
const idInterval = setInterval(() => {
    console.log("Interval cada 2 seg. Llevo " + ++i + " veces");

    if (i === 5) {
        clearInterval(idInterval);
        console.log("Fin de la ejecución del Interval");
    }
}, 2000);
