// ELEMENTOS
const form = document.getElementsByTagName('form')[0];
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('pass2');
const edad = document.getElementById('edad');
const hombre = document.getElementById('hombre');
const mujer = document.getElementById('mujer');
const terminos = document.getElementById('terminos');

function mostrarError(elemento, mensaje) {
    document.querySelector(elemento).textContent = mensaje;
}

function limpiarErrores() {
    const elementosErroes = Array.from(form.getElementsByClassName('error'));
    elementosErroes.forEach(spanError => {
        spanError.textContent = "";
    });
}

form.addEventListener('submit', (event) => {
    limpiarErrores();
    let elementoFocus = false;

    const valorPass = document.getElementById('pass').value;
    const valorPass2 = document.getElementById('pass2').value;

    if (!form.checkValidity() ||
        valorPass != valorPass2 ||
        !terminos.checked ||
        (!hombre.checked && !mujer.checked)) {
        event.preventDefault();

        // VALIDACIONES 
        // NOMBRE
        if (!nombre.checkValidity()) {
            mostrarError('#nombre + span.error', "Por favor, ingresa tu nombre.");
            if (!elementoFocus) {
                elementoFocus = true;
                nombre.focus();
            }
            nombre.classList.add('invalido');
        } else {
            nombre.classList.remove('invalido');
        }

        // EMAIL
        if (!email.checkValidity()) {
            if (email.validity.valueMissing) { // vacio
                mostrarError('#email + span.error', "Ingresa una dirección de correo electrónico.");
            } else if (email.validity.patternMismatch) { // no cumple con el patron
                mostrarError('#email + span.error', "La dirección debe seguir el formato: algo@algo.algo");
            }
            if (!elementoFocus) {
                elementoFocus = true;
                email.focus();
            }
            email.classList.add('invalido');
        } else {
            email.classList.remove('invalido');
        }

        // CONTRASEÑA
        if (!pass.checkValidity()) {
            if (pass.validity.valueMissing) {
                mostrarError('#pass + span.error', "Introduce una contraseña.");
            } else if (pass.validity.tooShort) {
                mostrarError('#pass + span.error', "La contraseña debe tener al menos 8 caracteres.");
            }
            if (!elementoFocus) {
                elementoFocus = true;
                pass.focus();
            }
            pass.classList.add('invalido');
        } else {
            pass.classList.remove('invalido');
        }

        // REPETIR CONTRASEÑA
        if (valorPass != valorPass2) {
            mostrarError('#pass2 + span.error', "Las contraseñas no coinciden.");
            if (!elementoFocus) {
                elementoFocus = true;
                pass2.focus();
            }
            pass2.classList.add('invalido');
        } else {
            pass2.classList.remove('invalido');
        }

        // EDAD
        if (!edad.checkValidity()) {
            if (edad.value < 18) {
                mostrarError('#edad + span.error', "Debes tener al menos 18 años para registrarte.");
            } else if (edad.value > 99) {
                mostrarError('#edad + span.error', "No puedes tener más de 99 años.");
            }
            if (!elementoFocus) {
                elementoFocus = true;
                edad.focus();
            }
            edad.classList.add('invalido');
        } else {
            edad.classList.remove('invalido');
        }

        // GÉNERO
        if (!hombre.checked && !mujer.checked) {
            mostrarError('#genero + span.error', "Debes seleccionar un género.");
        }

        // TÉRMINOS Y CONDICIONES
        if (!terminos.checked) {
            mostrarError('#terminos + span.error', "Debes aceptar los términos y condiciones.");
            if (!elementoFocus) {
                elementoFocus = true;
                terminos.focus();
            }

        }

    } else {
        window.alert("Usuario registrado");
    }
});