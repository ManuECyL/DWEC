function numeroAleatorio(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let dineroRestante = 50;
let restante = document.getElementById("restante");
let apostado = document.getElementById("apostado");

function actualizarApuesta() {
    
    let apuesta = document.getElementById("apuesta").value;

    apostado.innerHTML = "Apostado: " + apuesta + "€";
    console.log(apuesta);
}


function apostar() {

    let resultado = document.getElementById("resultado");

    let numeroApuesta = numeroAleatorio(1, 100);

    resultado.innerHTML = numeroApuesta;

    let apuesta = document.getElementById("apuesta").value;
    restante.innerHTML = "Restante: " + (dineroRestante - apuesta) + "€";
}


