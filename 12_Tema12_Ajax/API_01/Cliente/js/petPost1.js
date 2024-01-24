// Peticion POST con XMLHttpRequest

const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

document.getElementById('addCiudad').addEventListener('submit', (event) => {

    event.preventDefault();

    // Insertamos los valores de los campos input en un objeto nuevaCiudad
    const nuevaCiudad = {
        nuevoNombre: document.getElementById('nuevoNombre').value,
        habitantes: document.getElementById('habitantes').value
    }

    console.log(nuevaCiudad);

    const peticion = new XMLHttpRequest();
    const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/add`;

    // Iniciamos la petición
    peticion.open('POST', url);

    // Siempre tiene que estar esta línea si se envían datos
    peticion.setRequestHeader('Content-type', 'application/json');

    // Hay que convertir el objeto a una cadena de texto JSON para enviarlo
    peticion.send(JSON-stringify(nuevaCiudad));

    peticion.addEventListener('load', function() {
        console.log(peticion.responseText);
    });
})