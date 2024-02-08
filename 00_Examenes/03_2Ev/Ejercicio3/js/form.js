// Constantes con los campos del formulario
const numMatricula = document.getElementById('numMatricula');
const select = document.getElementsByName('grupo');
const dni = document.getElementById('dni');
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const codAlum = document.getElementById('codAlum');
const edad = document.getElementById('edad');
const nombreUser = document.getElementById('nombreUser');
const contrasena  = document.getElementById('contrasena');


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

// let arrayNombre = array();
// let arrayApellidos = array();
// let arrayResultado = array();

// nombreUser.addEventListener('focus', function(nombreUser, nombre, apellidos) {
    

//     for (let i = 0; i < nombre.length; i++) {
//         arrayNombre.push(nombre[i]);
//     }

//     for (let i = 0; i < apellidos.length; i++) {
//         arrayApellidos.push(apellidos[i]);
//     }

//     arrayResultado.push(arrayNombre[0]);

//     arrayApellidos.forEach(letra => {

//         if (letra != " ") {
//             arrayResultado.push(letra);
//         }

//     });

//     arrayResultado.forEach(valor => {

//         return nombreUser.innerText = valor;
//     });
// })


// Función para validar el formulario
function validaFormulario(event) {

    event.preventDefault();

    let hayError = false;

    // Borramos todos los mensajes de error del formulario
    limpiarErrores();


    // Validar Select
    // let opciones = Array.from(select.options);

    // opciones.forEach(opcion => {
        
    //     if (!opcion.selected && opcion[0].selected) {
    //         mostrarError('errorGrupo', "Seleccione un grupo");
    //     }
    // });


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
    const expresionNombre = /^[A-Z][a-z]{3,}/;

    if (nombre.value === "") {
        mostrarError('errorNombre', "Nombre vacío");
        nombre.focus();
        hayError = true;

    } else if (!expresionNombre.test(nombre.value)) {
        mostrarError('errorNombre', "El nombre debe comenzar por mayúscula y tener mínimo 3 minúsculas");
        nombre.focus();
        hayError = true;
    }

    // Validar Apellidos
    const expresionApellidos = /^[A-Z][a-z]{3,}\s[A-Z][a-z]{3,}/;

    if (apellidos.value === "") {
        mostrarError('errorApellidos', "Apellidos vacíos");
        apellidos.focus();
        hayError = true;

    } else if (!expresionApellidos.test(apellidos.value)) {
        mostrarError('errorApellidos', "Los apellidos deben comenzar por mayúscula y tener mínimo 3 minúsculas. Entre ellos debe existir un espacio");
        apellidos.focus();
        hayError = true;
    }

    let fechaHoy = new Date();

    // Validar Código Alumno
    if (codAlum.value === "" && dni.value != "") {

        let año = fechaHoy.getFullYear();
        codAlum.value = dni.value + año;
    }


    // Validar Edad
    
    let edadFecha = new Date(edad.value);

    let fechaHoyMS = fechaHoy.getTime();
    let edadFechaMS = edadFecha.getTime();

    let milisegundos = fechaHoyMS - edadFechaMS;

    let añosDiff = Math.trunc(((((milisegundos / 1000)/60)/60)/24)/365);


    if (edad.value === "") {
        mostrarError('errorEdad', "Edad vacía");
        edad.focus();
        hayError = true;
        
    } else if (edadFechaMS > fechaHoyMS) {
        mostrarError('errorEdad', edad.setCustomValidity("La Fecha de Nacimiento no puede ser posterior a la fecha actual"));
        edad.focus();
        hayError = true;
    
    } else if (añosDiff < 18) {
        alert("Es menor de edad");
    }
    

    // Validar Nombre Usuario
    if (nombreUser.value === "") {
        mostrarError('errorNombreUser', "Nombre de Usuario vacío");
        hayError = true;
    }


    // Validar Contraseña
    if (contrasena.value === "") {
        return contrasena.value = generarContraseña(8);
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


function generarContraseña(long) {

    const caracteres = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
    ,"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
    "j",,"k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2",
    "3","4","5","6","7","8","9","@","_"];

    let contraseña = "";

    for (let i = 0; i < long; i++) {
        
        contraseña = Math.random(caracteres);
    }

    return contraseña;
}