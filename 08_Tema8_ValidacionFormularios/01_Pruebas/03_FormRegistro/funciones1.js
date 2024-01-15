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

// Añadimos evento al formulario para validar los datos
document.getElementById('registroForm').addEventListener('submit', function(evento) {
    
    // Evitamos que se realice el evento antes de tiempo
    evento.preventDefault();

    // Borramos todos los mensajes de error del formulario
    limpiarErrores();

    // Validar Nombre
    if (nombre.value === "") {
        mostrarError('errorNombre', "El nombre está vacío");
    }

    // Validar Email
    $expEmail = /\S+@\S+\.\S+/;

    if (email.value === "" || !$expEmail.test(email.value)) {
        mostrarError('errorEmail', "Formato Email incorrecto");
    }

});