let nuevaVentana;

function abrirVentana() {
    // nuevaVentana = window.open("./index.html", "NombreVentana", "width=500, height=200, left=200, top=100, directories=1");
    nuevaVentana = window.open("", "NombreVentana", "width=500, height=200, left=200, top=100, directories=1");
}

// abrirVentana();

function desplazarVentana() {
    nuevaVentana.moveBy(40, 50);
}

function cerrarVentana() {
    nuevaVentana.close()
}

// const otraFuncion = () => nuevaVentana.moveBy(40,50);