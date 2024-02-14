// Constantes con los campos del formulario
const nombre = document.getElementById('nombre');
const dni = document.getElementById('dni');

// Función para mostrar los errores
function mostrarError(idSpan, texto) {
    document.getElementById(idSpan).textContent = texto;
}

// Función para borrar los errores
function limpiarErrores() {

    const eleFormulario = document.getElementById('formAltaAlumno');
    let elementosError = Array.from(eleFormulario.getElementsByClassName('error'));

    elementosError.forEach(elemento => {
        elemento.textContent = "";
    });
}

// Función para validar el formulario
function validaFormulario(event) {

    event.preventDefault();

    let hayError = false;

    // Borramos todos los mensajes de error del formulario
    limpiarErrores();

    // Validar DNI
    const expresionDni = /^\d{8}[a-zA-Z]$/;

    if (dni.value === "") {
        mostrarError('errorDni', "Introduzca el DNI");
        dni.focus();
        hayError = true;

    } else if (!expresionDni.test(dni.value)) {
        mostrarError('errorDni', 'Formato del DNI: "99999999X"');
        dni.focus();
        hayError = true;
    }

    // Validar Nombre
    if (nombre.value === "") {
        mostrarError('errorNombre', "Nombre vacío");
        nombre.focus();
        hayError = true;
    } 

    // Si no hay errores, enviamos el formulario
    if (!hayError) {
        enviado();
        return hayError;
    }

};

function enviado() {

    let alumno =  {
        nombre : nombre.value,
        dni: dni.value
    }

    let resultado = document.getElementById('resultado').textContent = JSON.stringify(alumno, null, 2);    

    setTimeout( function() {
        // resultado.innerHTML = "Nombre: " + alumno.nombre + "<br> DNI: " + alumno.dni.toUpperCase();
        window.alert("Enviado correctamente \n" + resultado);
    }, 100);
    

    return true;
}

