function mostrarTarget(evento) {
    console.log("se ha pasado por: " + evento.currentTarget.innerText);
    console.log(evento.target);

    console.log("se ha pasado por: " + evento.target.innerText);
    console.log(evento.currentTarget);
}

function googlear(evento2) {
    evento2.preventDefault(); // Evita que se produzca el evento
    window.alert('Has clickado en Google');
    evento2.stopPropagation(); // Parar la propagacion del evento
}

function obtenerCoordenadas(evento3) {
    console.log("Coordenada X:" + evento3.offsetX + ". Coordenada Y:" + evento3.offsetY);
}

document.getElementById('link1').addEventListener('click', googlear);
// document.getElementById('p1').addEventListener('mouseenter', mostrarTarget);
document.body.addEventListener('click', obtenerCoordenadas);