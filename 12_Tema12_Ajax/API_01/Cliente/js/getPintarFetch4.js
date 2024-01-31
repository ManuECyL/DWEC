// Función fetch() que simula la API-Fetch
function fetch(url) { 

    return new Promise((resolve, reject) => { 

      const peticion = new XMLHttpRequest(); 

      peticion.open('GET', url); 
      peticion.send(); 
      
      peticion.addEventListener('load', () => { 
          resolve(peticion.responseText); 
      }); 

      peticion.addEventListener('error', () => reject('Network Error')); 
    }) 
}

document.getElementById('getCiudad').addEventListener('submit', (event)=>{

    event.preventDefault();

    const url = 'http://127.0.0.1:3000';

    const idCiudad = document.getElementById('id-ciudad').value;

    fetch(url + '/ciudades/' + idCiudad)
    
        .then(datosCrudos => {
            console.log(datosCrudos);
            return JSON.parse(datosCrudos);
        })

        .then(datosObjeto => console.log(datosObjeto))

        .catch(error => console.error(error));
});
