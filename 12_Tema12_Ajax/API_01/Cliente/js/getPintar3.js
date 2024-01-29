// peticion GET con JSON que no funciona por el asincronismo
// const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
// const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

function getCiudad(idCiudad){

    return new Promise((resolve, reject) => {

        const peticion = new XMLHttpRequest(); 

        peticion.open('GET', SERVER + '/productos?id=' + idProd); 
        peticion.send(); 

        peticion.addEventListener('load', () => { 

          if (peticion.status === 200) { 
            resolve(JSON.parse(peticion.responseText)); 

          } else { 
            reject("Error " + peticion.status + " (" + peticion.statusText + ") en la petición"); 
          } 

        });

        // Manejar el evento error en caso de problemas de red
        peticion.addEventListener('error', () => reject('Error en la petición HTTP')); 
        
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