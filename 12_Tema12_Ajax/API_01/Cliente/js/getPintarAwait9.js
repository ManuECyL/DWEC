// peticion GET con JSON que funciona con ASYNC/AWAIT manejando los errores try-catch

async function getCiudad(idCiudad){

    const url=`http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/${idCiudad}`;

    const respuesta = await fetch(url);
    
    if (!respuesta.ok) {
        throw `Error ${respuesta.status} de la BBDD: ${respuesta.statusText}`;
    }

    const datos = await respuesta.json();

    return datos;
}

document.getElementById('getCiudad').addEventListener('submit', async (event)=>{

    event.preventDefault();

    const idCiudad = document.getElementById('id-ciudad').value;

    try {
        datos = await getCiudad(idCiudad);
        
        // pintamos los datos en la página
        document.getElementById('p1').innerHTML = datos.nombre + ": " + datos.cantidad;

    } catch (error) {
        console.error("Error inesperado: " + error);
    }
   
});