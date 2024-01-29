// peticion GET con JSON que no funciona por el asincronismo
// const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
// const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

function getCiudad(idCiudad){

    const peticion=new XMLHttpRequest();
    const url=`http://${dirIP_api}:${PUERTO_EXPRESS}`;

    peticion.open('GET', url+ '/ciudades/' + idCiudad);
    peticion.send();
    
    peticion.addEventListener('load', function(){

        if(peticion.status===200){

            // En datos tenemos un objeto
            const datos = JSON.parse(peticion.responseText);
            
            console.log(datos);

            return(datos);

        } else {
            console.error("Error: " + peticion.status + ": " + peticion.statusText);
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

    datos = getCiudad(idCiudad);
    console.log(datos);

    // pintamos los datos en la página
    document.getElementById('p1').innerHTML = datos[0].nuevoNombre + ": " + datos[0].habitantes;
   
});