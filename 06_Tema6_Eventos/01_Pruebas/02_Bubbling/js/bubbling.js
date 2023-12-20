let divClick = function(event) {
    // eventPhase: 1 -> capture, 2 -> target (objetivo), 3 -> bubble
    document.getElementById('info').innerHTML += "Has pulsado: " + this.id + ". Fase: " +
    event.eventPhase + ", this: " + this.id + ", event.target: " + event.target.id + 
    ",event.currentTarget: " + event.currentTarget.id + "<br>";
};

let divVerde = document.getElementById("divVerde");
let divRojo = document.getElementById("divRojo");
let divAzul = document.getElementById("divAzul");
    divVerde.addEventListener('click', divClick);
    divRojo.addEventListener('click', divClick);
    divAzul.addEventListener('click', divClick);