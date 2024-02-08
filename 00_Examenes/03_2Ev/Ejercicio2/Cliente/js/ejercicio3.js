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


async function getCiudadByName(nombre){

    const url=`http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/${nombre}`;

    const respuesta = await fetch(url);
    
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

            crearTabla(idEl, element);
    
        });
    
    }) .catch(error => {
        console.error("Error inesperado: " + error);
    })
} 

document.getElementById('getCiudadNombre').addEventListener('submit', async (event)=>{

    event.preventDefault();

    const nombreCiudad = document.getElementById('nombre_ciudad').value;

    datos = await getCiudadByName(nombreCiudad)

        .then(datos => {

                if (datos.nombre == nombreCiudad) {
                    
                    tbody.innerHTML = '';

                    crearTabla(idEl, datos);   
                } 
            
        
        }) .catch(error => {
            console.error("Error inesperado: " + error);
        })

});


function crearTabla(idEl, element) {

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
        form.setAttribute('method', 'post');
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

    idEl ++;

}