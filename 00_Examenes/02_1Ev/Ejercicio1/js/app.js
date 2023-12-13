function crearTabla(numFilas, numColumnas) {

    let table = document.createElement('table');
        table.id = "idTabla";
    
    // Bucle para crear el número de filas deseado
    for (let i = 0; i < numFilas; i++) {
        let filaTR = document.createElement('tr');
            table.appendChild(filaTR);

        // Bucle para crear el número de columnas deseado
        for (let i = 0; i < numColumnas; i++) {
            let columnaTD = document.createElement('td');
                filaTR.appendChild(columnaTD);
        }
    }

    table.style.padding = "40px";

    return document.body.appendChild(table);
}


let idExamen = document.getElementById("examen");

idExamen.appendChild(crearTabla(2,3));
idExamen.appendChild(crearTabla(4,8));



function crearBoton() {

    let tabla = document.getElementById("idTabla");
    
    let boton = document.createElement('input');
        boton.setAttribute('type', 'button');
        boton.id = "idBoton"
        boton.value = "Cambiar";
        boton.onclick = eventoBoton(tabla);

    // Obtenemos el primer hijo del elemento con id "examen"
    let primerElementoIdExamen = idExamen.firstElementChild;

    // Insertamos el boton creado antes del primer hijo del elemento con id "examen"
    return idExamen.insertBefore(boton, primerElementoIdExamen);
}

crearBoton();

function eventoBoton(table) {
 
    if (table.classList.contains('estrecha') || !table.classList.contains('ancha')) {
        claseAncha(table);
    
    } else if (table.classList.contains('ancha')) {
        claseEstrecha(table);
    }
}

function claseAncha() {

    let tabla = document.getElementById("idTabla");
    tabla.classList.remove('estrecha');
        
    return tabla.classList.add('ancha');;
}


function claseEstrecha() {
    
    let tabla = document.getElementById("idTabla");
    tabla.classList.remove('ancha');
    
    return tabla.classList.add('estrecha');;
}