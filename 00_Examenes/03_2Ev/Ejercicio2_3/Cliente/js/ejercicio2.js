const dirIP_api = '127.0.0.1'; 
const PUERTO_EXPRESS = 3000;

async function getCiudades() {

    const url=`http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades`;

    const respuesta = await fetch(url);

    if (!respuesta.ok) {
        throw `Error ${respuesta.status} de la BBDD: ${respuesta.statusText}`;
    }

    const datos = await respuesta.json();

    return datos;
}


async function eliminarCiudad(idCiudad) {

    const url=`http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/${idCiudad}`;

    const respuesta = await fetch(url, {
        method: 'DELETE',
    });

    if (!respuesta.ok) {
        throw `Error ${respuesta.status} de la BBDD: ${respuesta.statusText}`;
    }

    const datos = await respuesta.json();

    return datos;
}


const tbody = document.getElementById('datos');
let idEl = 1;

window.onload = async function() { 
    
    datos = await getCiudades()

    .then(datos => {

        datos.forEach(element => {

            let tr = document.createElement('tr');
            
            tbody.appendChild(tr);

            let tdId = document.createElement('td');
                tdId.innerHTML = element.id;

            tr.appendChild(tdId);

            let tdNombre = document.createElement('td');
                tdNombre.innerHTML = element.nombre;
                
            tr.appendChild(tdNombre);

            let tdCantidad = document.createElement('td');
                tdCantidad.innerHTML = element.cantidad;

            tr.appendChild(tdCantidad);

            
            let form = document.createElement('form');
                // form.setAttribute('method', 'post');
                form.setAttribute('id', 'deleteCiudad');
            
            let btnEliminar = document.createElement('input');
                btnEliminar.setAttribute('id', 'btnEliminar' + idEl);
                btnEliminar.setAttribute('class', 'Eliminar');
                btnEliminar.setAttribute('type', 'submit');
                btnEliminar.setAttribute('value', 'Eliminar');
            
            form.appendChild(btnEliminar);
                    
            let tdEliminar = document.createElement('td');
                
            tdEliminar.appendChild(form);
            tr.appendChild(tdEliminar);

            document.getElementById('deleteCiudad').addEventListener('submit', async (event) => {

                event.preventDefault();

                let idCiudad = element.id;
        
                console.log(idCiudad);
        
                datos = await eliminarCiudad(idCiudad)
        
                    .then(datos => {
                        console.log(datos);
        
                    }) .catch(error => {
                        console.error("Error inesperado: " + error);
                    })
            })
        
            idEl ++;
        });
    
    }) .catch(error => {
        console.error("Error inesperado: " + error);
    })

} 