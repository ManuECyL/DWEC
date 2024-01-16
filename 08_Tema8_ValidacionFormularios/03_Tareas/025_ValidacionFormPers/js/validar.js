// Constantes con los campos del formulario
const nombre = document.getElementById('nombre');
const email = document.getElementById('mail');
const contrasena  = document.getElementById('contrasena');
const contrasenaRep = document.getElementById('contrasenaRep');
const edad = document.getElementById('edad');
const genero = document.getElementsByName('genero');
const terminos = document.getElementById('terminos'); 

// Función para mostrar los errores
function mostrarError(idSpan, texto) {
    document.getElementById(idSpan).textContent = texto;
}

// Función para borrar los errores
function limpiarErrores() {

    const eleFormulario = document.getElementById('formTarea25');
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

    // Validar Nombre
    const expresionNombre = /^[A-Z][a-z]{1,49}/;

    if (nombre.value === "") {
        mostrarError('errorNombre', "Nombre vacío");
        nombre.focus();
        hayError = true;

    } else if (!expresionNombre.test(nombre.value)) {
        mostrarError('errorNombre', "El nombre debe comenzar por mayúscula y tener mínimo 2 caracteres y máximo 50");
        nombre.focus();
        hayError = true;
    }

    // Validar Email
    const expEmail = /\S+@\S+\.\S+/;

    if (email.value === "") {
        mostrarError('errorEmail', "Email vacío");
        email.focus();
        hayError = true;

    } else if (!expEmail.test(email.value)) {
        mostrarError('errorEmail', "Formato Email incorrecto");
        email.focus();
        hayError = true;
    }

    // Validar Contraseña
    if (contrasena.value === "") {
        mostrarError('errorContrasena', "Contraseña vacía");
        contrasena.focus();
        hayError = true;

    } else if (contrasena.value.length < 8) {
        mostrarError('errorContrasena', "La contraseña debe tener mínimo 8 caracteres");
        contrasena.focus();
        hayError = true;
    }

    // Validar Repetir Contraseña
    if (contrasenaRep.value === "") {
        mostrarError('errorContrasenaRep', "Debe repetir la contraseña");
        contrasenaRep.focus();
        hayError = true;

    } else if (contrasenaRep.value !== contrasena.value) {

        if (contrasena.value === "") {
            contrasena.focus();
        
        } else {
            mostrarError('errorContrasenaRep', "Las contraseñas no coinciden");
            contrasenaRep.focus();
            hayError = true;
        }
    }

    // Validar Edad
    if (edad.value === "") {
        mostrarError('errorEdad', "Edad vacía");
        edad.focus();
        hayError = true;

    } else if (edad.value < 18 || edad.value > 99) {
        mostrarError('errorEdad', "La edad mínima debe ser 18 y la máxima 99");
        edad.focus();
        hayError = true;
    
    } else if (isNaN(edad.value)) {
        mostrarError('errorEdad', "La edad debe ser un número");
        edad.focus();
        hayError = true;
    }

    // Validar Género
    let generos = false;

    // Recorro los generos para comprobar si está seleccionado alguno
    for (let i = 0; i < genero.length; i++) {

        if (genero[i].checked) {
            generos = true;
            break;
        }
    }

    if (!generos) {
        mostrarError('errorGeneros', "Debe seleccionar un género");
        genero[0].focus();
        hayError = true;
    } 
    

    // Validar Términos y Condiciones
    if (!terminos.checked) {
        mostrarError('errorTerminos', "Debe aceptar los términos y condiciones");
        terminos.focus();
        hayError = true;
    } 


    // Si no hay errores, enviamos el formulario
    if (!hayError) {
        enviado();
        return hayError;
    }

};

function enviado() {
    window.alert("Enviado correctamente");
    return true;
}