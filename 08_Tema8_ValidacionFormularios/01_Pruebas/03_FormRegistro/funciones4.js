// Constantes con los campos del formulario
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const contrasena = document.getElementById('contrasena');

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

// Añadimos evento al formulario para validar los datos
document.getElementById('registroForm').addEventListener('submit', function(evento) {
    
    // Evitamos que se realice el evento antes de tiempo
    evento.preventDefault();

    // Borramos todos los mensajes de error del formulario
    limpiarErrores();

    // Validar Nombre
    if (!nombre.checkValidity()) {
        mostrarError('errorNombre', nombre.validationMessage);
    }

    // Validar Email
    if (!email.checkValidity()) {
        mostrarError('errorEmail', email.validationMessage);
    }

    // Validar Contraseña
    if (!contrasena.checkValidity()) {
        mostrarError('errorContrasena', contrasena.validationMessage);
    }

    // Si no hay errores, enviamos el formulario
    if (document.getElementById('registroForm').checkValidity()) {
        alert("Enviado correctamente");
        this.onsubmit();
    }

});