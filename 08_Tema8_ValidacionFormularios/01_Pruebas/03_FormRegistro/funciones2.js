// Constantes con los campos del formulario
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');

// Función para mostrar los errores
function mostrarError(idSpan, texto) {
    document.getElementById(idSpan).textContent = texto;
}

// Función para borrar los errores
function limpiarErrores() {
    const eleFormulario = document.getElementById('registroForm');
    let elementosError = Array.from(eleFormulario.getElementsByClassName('error'));

    elementosError.forEach(elemento => {
        elemento.textContent = "";
    });
}

// Función para validar el formulario
function validarFormulario() {

    let hayError = false;

    // Borramos todos los mensajes de error del formulario
    limpiarErrores();

    // Validar Nombre
    if (nombre.value === "") {
        mostrarError('errorNombre', "El nombre está vacío");
        hayError = true;
    }

    // Validar Email
    $expEmail = /\S+@\S+\.\S+/;

    if (email.value === "" || !$expEmail.test(email.value)) {
        mostrarError('errorEmail', "Formato Email incorrecto");
        hayError = true;
    }

    // Si no hay errores, enviamos el formulario
    return !hayError;

    if (document.getElementById('registroForm').checkValidity()) {
        window.alert("Enviado correctamente");
        return true;
    }
};