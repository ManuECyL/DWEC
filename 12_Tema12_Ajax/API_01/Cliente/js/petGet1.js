// document.getElementById('b1').addEventListener('click', realizarSolicitud_1);
document.getElementById('b3').addEventListener('click', realizarSolicitud_3);

function pintar(datos, lugar) {

    datos.foreach(ciudad => {

        const nuevoElementoLi = document.createElement('li');
            nuevoElementoLi.textContent = ciudad.nombre;
            nuevoElementoLi.style.cursor = 'pointer';
            
            nuevoElementoLi.addEventListener('click', function() {
                nuevoElementoLi.textContent = ciudad.nombre + ": " + ciudad.cantidad;
            });

        lugar.appendChild(nuevoElementoLi);
    })
}

// function realizarSolicitud_1() {

//     console.log('Peticion 1');
    
//     // Instanciamos una Petición como un nuevo objeto XMLHttpRequest
//     const peticion = new XMLHttpRequest();
    
//     const url =  'http://127.0.0.1:3000/ciudades';
    
//     // Puede ponerse true o false como último parámetro, dependiendo si es asíncrona o no. Sino se pone, por defecto es true.
//     peticion.open('GET', url, true)

//     peticion.onreadystatechange = function () {

//         console.log(peticion.readyState);

//         if (peticion.readyState == 4) { // Hemos recibido

//             if (peticion.status == 200) {

//                 let datos = JSON.parse(peticion.responseText) // JSON a array de objetos

//                 console.log("Datos recibidos", datos);
            
//             } else {
//                 console.error("Error, código de error ", peticion.status);
//             }

//             console.log(peticion.responseText);
//         }

//     }
    
//     // Enviamos la petición
//     peticion.send();
// }


function realizarSolicitud_3() {

    console.log('Peticion 3');
    
    // Instanciamos una Petición como un nuevo objeto XMLHttpRequest
    const peticion = new XMLHttpRequest();
    
    const url =  'http://127.0.0.1:3000/ciudades';
    
    peticion.open('GET', url)

    peticion.addEventListener('load', function() {
        
        if (peticion.status === 200) {

            console.log(peticion.readyState);

            const datos = JSON.parse(peticion.responseText) // JSON a array de objetos

            const lugar = document.getElementById('listaCiudades');

            pintar(datos, lugar);
        
        } else {
            muestraError(peticion);
        }      

    });

    // Enviamos la petición
    peticion.send();

    function muestraError(peticion) {

        console.log("EEEEE");
        console.log(peticion.status);

      if (peticion.status) {
          console.log("Error "+peticion.status+" ("+peticion.statusText+") en la petición");

      } else {
          console.log("Ocurrió un error o se abortó la conexión");
      }

    }
    
    peticion.addEventListener('error', muestraError);
    peticion.addEventListener('abort', muestraError);
    peticion.addEventListener('timeout', muestraError);
}


