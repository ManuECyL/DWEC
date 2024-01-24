// Peticion POST con URLEnconded

const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

// OJO!! en la API (ciudades.js) es necesario lo siguiente
// Middleware para manejar datos codificados en formato x-www-form-urlencoded
// ciudades.use(express.urlencoded({extended: true}));

document.getElementById('addCiudad').addEventListener('submit', (event) => {

    event.preventDefault();
  
    const nuevoNombre = document.getElementById('nuevoNombre').value;
    const habitantes = document.getElementById('habitantes').value;
    
    const peticion = new XMLHttpRequest();
    const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/add`;

    // Iniciamos la petición
    peticion.open('POST', url);

    // Siempre tiene que estar esta línea si se envían datos
    peticion.setRequestHeader('Content-type', 'application/json');

    // La siguiente línea lleva & para separar los parámetros
    const datosCodificados = `nuevoNombre=${encodeURIComponent(nuevoNombre)}&habitantes=${encodeURIComponent(habitantes)}`;

    peticion.send(datosCodificados)

    peticion.addEventListener('load', function() {
        console.log(peticion.responseText);
    });

    // Manejar el evento de error en caso de problemas de red
    peticion.addEventListener('error', function() {
        console.error('Error de red al realizar la solicitud');
    })
})