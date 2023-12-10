let restante = 50;

function actualizarApuesta() {

    let apuesta = document.getElementById("apuesta").value;
    let apostado = document.getElementById("apostado");

    apostado.innerHTML = "Apostado: " + apuesta + "€";
    console.log(apuesta);
}

function apostar() {

    let resultado = document.getElementById("resultado");

    let numeroApuesta = numeroAleatorio(1, 100);

    let numeros = "";
    let numeroAleatorio;

    do {
        numeroAleatorio = numeroAleatorio(1, 100);
        numeros += numeroElegido + " ";
        resultado.innerHTML = numeros;
        
    } while (numeroAleatorio !== numeroApuesta);

    resultado.innerHTML = numeroApuesta;
}


function numeroAleatorio(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}