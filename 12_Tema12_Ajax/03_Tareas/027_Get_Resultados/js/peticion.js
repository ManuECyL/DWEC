document.getElementById('b1').addEventListener('click', realizarSolicitudCiudades);


function realizarSolicitudCiudades() {
    
    // Instanciamos una Petición como un nuevo objeto XMLHttpRequest
    const peticion = new XMLHttpRequest();
    
    const url =  'http://127.0.0.1:3000/ciudades';
    
    // Puede ponerse true o false como último parámetro, dependiendo si es asíncrona o no. Sino se pone, por defecto es true.
    peticion.open('GET', url, true)

    peticion.onreadystatechange = function () {

        console.log(peticion.readyState);

        if (peticion.readyState == 4) { // Hemos recibido

            if (peticion.status == 200) {

                let datos = JSON.parse(peticion.responseText) // JSON a array de objetos

                // Elemento div del HTML donde insertaremos las ciudades
                let resultados = document.getElementById('resultados');

                resultados.innerHTML = '';

                for (let ciudad of datos) {
                    resultados.innerHTML += '<p>Ciudad: ' + ciudad.nombre + '</p>';
                }

                console.log("Datos recibidos", datos);
            
            } else {
                console.error("Error, código de error ", peticion.status);
            }

            console.log(peticion.responseText);
        }

    }
    
    // Enviamos la petición
    peticion.send();
}

