// POST con la API Fetch() 
const url = `http://${dirIP_api}:${PUERTO_EXPRESS}`;

document.getElementById('addCiudad').addEventListener('submit', (event)=>{

    event.preventDefault();

    const datosBody = {
        nuevoNombre: document.getElementById('nuevoNombre').value,
        habitantes: document.getElementById('habitantes').value
    }

    fetch(url + '/ciudades/add' , {
        method: 'POST', // o PUT o PATCH o DELETE...
        body: JSON.stringify(datosBody), // Pasamos a cadena datosBody
        headers: {
            'Content-Type': 'application/json'
        }

    }).then(datosCrudos => {

        // Si la respuesta no es correcta, lanzamos una excepción que intercepta el catch
        if (!datosCrudos.ok) {
            throw `Error ${datosCrudos.status} de la BBDD: ${datosCrudos.statusText}`;
        }

        console.log(datosCrudos);

        return datosCrudos.json();
    })

    .then(datosObjeto => {
        console.log(datosObjeto);
        document.getElementById('p1').innerHTML = "Ciudad añadida: " + datosObjeto.nuevoNombre + ": " + datosObjeto.habitantes;
    })

    .catch(error => console.error(error));
});