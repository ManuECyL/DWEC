// No funciona, hay que poner las cabeceras y más cosas

function fernandoAPI() {

    const url = "http://192.168.7.202/Tema7/api/index/institutos";

    fetch(url)

        .then(datosCrudos => {

            // Si la respuesta no es correcta, lanzamos una excepción que intercepta el catch
            if (!datosCrudos.ok) {
                throw `Error ${datosCrudos.status} de la BBDD: ${datosCrudos.statusText}`;
            }

            console.log(datosCrudos);

            return datosCrudos.json();
        })

        .then(datosObjeto => {
            console.log(datosObjeto);
            document.getElementById('p1').innerHTML = datosObjeto.nombre + ": " + datosObjeto.cantidad;

            return datosObjeto;
        
        }).then(datosNuevos => console.log(JSON.stringify(datosNuevos)))

        .catch(error => console.error(error));
}