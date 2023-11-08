// Haz que a los 2 segundos de abrir la página se abra un popup con un mensaje de bienvenida. Esta 
    // ventana tendrá en su interior un botón Cerrar que permitirá que el usuario la cierre haciendo clic en él. Tendrá el 
    // tamaño justo para visualizar el mensaje y no tendrá barras de scroll, ni de herramientas, ni de dirección… 
    // únicamente el mensaje.

function abrirVentana() {    

    // width=500, height=100, left=200, top=100

    nuevaVentana = window.open("", "Pop Up", "width=500, height=100, left=200, top=100");

    const bienvenida = nuevaVentana.document.createElement('h1');
    bienvenida.innerHTML = "Bienvenido a la ventana Pop Up";
    nuevaVentana.document.body.appendChild(bienvenida);

    const boton1 = nuevaVentana.document.createElement('button');
    boton1.innerHTML = "Cerrar Ventana";
    nuevaVentana.document.body.appendChild(boton1);
    boton1.addEventListener('click', cerrarVentana);
}

setTimeout(abrirVentana, 2000);


function cerrarVentana() {
    nuevaVentana.close()
}

