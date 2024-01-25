const dirIP_api = '127.0.0.1'; // O asignar el valor que necesitas
const PUERTO_EXPRESS = 3000; // O asignar el valor que necesitas

document.getElementById('addCiudad').addEventListener('submit', (event) => {

    event.preventDefault();

    // Obtener datos del formulario
    const datosForm = new FormData(document.getElementById('addCiudad'));

    console.log(datosForm);

    const nuevoNombre = datosForm.get('nuevoNombre'); // Name de los input del form
    const habitantes = datosForm.get('habitantes');

    // FormData.append('otrodato', 'valortexto');
    // console.log(datosForm);

    console.log(nuevoNombre);
    console.log(habitantes);

    const peticion = new XMLHttpRequest();
    const url = `http://${dirIP_api}:${PUERTO_EXPRESS}/ciudades/add`;

    peticion.open('POST', url);
    peticion.send(datosForm);

    peticion.addEventListener('load', function() {
        
        // Procesamos los datos
        console.log(peticion.responseText);
    });

});