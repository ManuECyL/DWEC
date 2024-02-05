document.getElementById('b1').addEventListener('click', realizarPutCiudades);
document.getElementById('b2').addEventListener('click', realizarPatchCiudades);


function realizarPutCiudades() {

    const id = document.getElementById('id').value;

    console.log("ID", id);
    
    // Instanciamos una Petición como un nuevo objeto XMLHttpRequest
    const peticion = new XMLHttpRequest();
    
    const url =  'http://127.0.0.1:3000/ciudades/put/' + id;
    
    peticion.open('PUT', url, true);

    peticion.setRequestHeader('Content-Type', 'application/json');

    const nuevoNombre = document.getElementById('nuevoNombre').value;
    const habitantes = document.getElementById('habitantes').value;

    if (!nuevoNombre || !habitantes) {
        console.error("Error, todos los campos son obligatorios");
        return;
    }

    // Datos que queremos modificar recogiendo el valor de los inputs
    const datos = {
        nuevoNombre: nuevoNombre,
        habitantes: habitantes
    }

    peticion.onreadystatechange = function () {

        // console.log(peticion.readyState);

        if (peticion.readyState == 4) { // Hemos recibido

            if (peticion.status == 200) {

                let datos = JSON.parse(peticion.responseText) // JSON a array de objetos

                console.log("Datos Modificados", datos);

                obtenerCiudades();
            
            } else if (peticion.status == 404) {
                console.error("Error, la ciudad con el id proporcionado no se encuentra");

            } else {
                console.error("Error, código de error ", peticion.status);
            }

            // console.log(peticion.responseText);
        }
    }

    peticion.send(JSON.stringify(datos));
}


function realizarPatchCiudades() {

    const id = document.getElementById('id').value;

    // Guardamos el valor de los campos que queremos modificar en constantes
    const nuevoNombre = document.getElementById('nuevoNombre').value;
    const habitantes = document.getElementById('habitantes').value;

    // Obtenemos los datos actuales de la ciudad. Esto se utilizará para mantener el valor anterior de un campo si no se ha modificado su valor
    const peticionGet = new XMLHttpRequest();
    peticionGet.open('GET', 'http://127.0.0.1:3000/ciudades/' + id, true);

    peticionGet.onreadystatechange = function () {
        
        if (peticionGet.readyState == 4 && peticionGet.status == 200) {

            const ciudadActual = JSON.parse(peticionGet.responseText);
            console.log(ciudadActual);
            
            const peticionPatch = new XMLHttpRequest();
            const url =  'http://127.0.0.1:3000/ciudades/patch/' + id;
            
            peticionPatch.open('PATCH', url, true);

            peticionPatch.setRequestHeader('Content-Type', 'application/json');

            const datos = {
                nuevoNombre: nuevoNombre || ciudadActual.nombre,
                habitantes: habitantes || ciudadActual.cantidad
            }

            peticionPatch.onreadystatechange = function () {
                    
                if (peticionPatch.readyState == 4) { // Hemos recibido

                    if (peticionPatch.status == 200) {

                        let datos = JSON.parse(peticionPatch.responseText) // JSON a array de objetos

                        console.log("Datos Modificados", datos);

                        obtenerCiudades();
                    
                    } else if (peticionPatch.status == 404) {
                        console.error("Error, la ciudad con el id proporcionado no se encuentra");
                    
                    } else {
                        console.error("Error, código de error ", peticionPatch.status);
                    }
                }
            };

            peticionPatch.send(JSON.stringify(datos));
        }

    };

    peticionGet.send();
}


function obtenerCiudades() {

    // Instanciamos una Petición como un nuevo objeto XMLHttpRequest
    const peticion = new XMLHttpRequest();

    const url =  'http://127.0.0.1:3000/ciudades';
    
    // Puede ponerse true o false como último parámetro, dependiendo si es asíncrona o no. Sino se pone, por defecto es true.
    peticion.open('GET', url, true)

    peticion.onreadystatechange = function () {

        // console.log(peticion.readyState);

        if (peticion.readyState == 4) { // Hemos recibido

            if (peticion.status == 200) {

                let datos = JSON.parse(peticion.responseText) // JSON a array de objetos

                let resultadosDiv = document.getElementById('resultados');

                resultadosDiv.innerHTML = '';

                for (let ciudad of datos) {
                    resultadosDiv.innerHTML += `<p>${ciudad.nombre} - ${ciudad.cantidad}</p>`;
                }
            
            } else {
                console.error("Error, código de error ", peticion.status);
            }
        }
    }
    
    // Enviamos la petición
    peticion.send();
}