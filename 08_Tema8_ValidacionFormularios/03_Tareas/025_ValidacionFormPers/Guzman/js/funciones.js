
function validarFormulario() {

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const expresioRegular=/\S+@\S+\.\S+/;
    const pass = document.getElementById("pass").value;
    const pass2 = document.getElementById("pass2").value;
    const edad = document.getElementById("edad").value;
    const hombre = document.getElementById("hombre").checked;
    const mujer = document.getElementById("mujer").checked;
    const condiciones = document.getElementById("condiciones").checked;


    // Validación Nombre
    if (nombre === "") {
        document.getElementById("errorNombre").innerHTML ="Introduzca el nombre.";
        //nombre.setCustomValidity("Introduzca el nombre.");
        return false;
    } else {
        document.getElementById("errorNombre").innerHTML = "";
        //nombre.setCustomValidity("");
    }
    // // Validación Email
    if (email === "") {
        document.getElementById("errorEmail").innerHTML ="Introduzca un email.";
        //email.setCustomValidity("Introduzca un email.");
        return false;
    } else {
        document.getElementById("errorEmail").innerHTML = "";
        //email.setCustomValidity("");
    }
    if (!expresioRegular.test(email)) {
        document.getElementById("errorEmail").innerHTML ="Introduzca un email con el formato correcto.";
        //email.setCustomValidity("Introduzca un email con el formato correcto.");
        return false;
    }else{
        document.getElementById("errorEmail").innerHTML = "";
        //email.setCustomValidity("");
    }

    ///Validacion Contraseña1
    if (pass ==="") {
        document.getElementById("errorPass").innerHTML ="Debe poner una contraseña";
        //pass.setCustomValidity("Introduzca una contraseña.");
        return false;
    }else{
        document.getElementById("errorPass").innerHTML ="";
        //pass.setCustomValidity("");
    }
    
    if(pass.length < 8){
        document.getElementById("errorPass").innerHTML ="La contraseña debe tener al menos 8 caracteres.";
        //pass.setCustomValidity("La contraseña debe tener al menos 8 caracteres.");
        return false;
    }else{
        document.getElementById("errorPass").innerHTML ="";
        //pass.setCustomValidity("");
    }

    //Validacion Contraseña2
    if (pass != pass2) {
        document.getElementById("errorPass2").innerHTML ="Las contraseñas no coinciden.";
        //pass.setCustomValidity("Las contraseñas no coinciden.");
        return false;
    }else{
        document.getElementById("errorPass2").innerHTML ="";
        //pass.setCustomValidity("");
    }

    //Validacion Edad
    if (edad < 18 || edad > 99) {
        document.getElementById("errorEdad").innerHTML ="Debes tener al menos 18 años para registrarte.";
        //edad.setCustomValidity("Debes tener al menos 18 años para registrarte.");
        return false;
    }else{
        document.getElementById("errorEdad").innerHTML ="";
        //edad.setCustomValidity("");
    }
    
    //Validacion Radio
    if (!hombre && !mujer) {
        document.getElementById("errorGenero").innerHTML ="Selecciona tu género.";
        return false;
    }else if (hombre.checked || mujer.checked){
        document.getElementById("errorGenero").innerHTML ="";
    }

    //Validar check
    if (!condiciones) {
        document.getElementById("errorCheck").innerHTML ="Acepta las condiciones.";
        return false;
    }else{
        document.getElementById("errorCheck").innerHTML ="";
    }

    //Otras validaciones pueden agregarse según sea necesario
    return true; // Envía el formulario si todas las validaciones son exitosas
}