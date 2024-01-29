function renderCiudad(datos) {

    console.log(datos);

    // Pintamos los datos en la página
    document.getElementById('p1').innerHTML = datos.nombre + ": " + datos.cantidad;
}

function getCiudad(idCiudad, funcion_callback){

    const peticion = new XMLHttpRequest();
    const url =`http://${dirIP_api}:${PUERTO_EXPRESS}`;

    peticion.open('GET', url+ '/ciudades/' + idCiudad);
    peticion.send();
    
    peticion.addEventListener('load', function(){

        if(peticion.status===200){

            // En datos tenemos un objeto
            const datos= JSON.parse(peticion.responseText);
            
            // console.log(datos);

            funcion_callback(datos);

        } else {
            console.error("Error: "+ peticion.status + ": "+ peticion.statusText);
        }
    });

    // Manejar el evento error en caso de problemas de red
    peticion.addEventListener('error', function () {
        console.error('Error de red al realizar la solicitud');
    });
}

document.getElementById('getCiudad').addEventListener('submit', (event)=>{

    event.preventDefault();

    const idCiudad = document.getElementById('id-ciudad').value;

    datos = getCiudad(idCiudad, renderCiudad);   
});