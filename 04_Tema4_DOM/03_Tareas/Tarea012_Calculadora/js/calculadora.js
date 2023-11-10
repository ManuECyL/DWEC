console.log("Aplicación Calculadora");

//  Añadir evento 'click' al botón sumar
let btnSumar = document.getElementById('boton_suma');
btnSumar.addEventListener('click', sumar);

// Función que realiza la suma de los operandos
function sumar() {

    // Obtener el valor de los operandos
    let valorA = document.getElementById('operandoA').value;
    let valorB = document.getElementById('operandoB').value;

    // Crear un input para que muestre en el input el resultado de la función
    let inputResultado = document.createElement('input');
        inputResultado.readOnly = true;
        inputResultado.setAttribute("type", "text");
        inputResultado.classList.add('form-control');

    // Añadir el inputResultado al div de resultado
    let divResultado = document.getElementById('resultado');
        divResultado.appendChild(inputResultado);
      
    // Comprobación de si hay valores en los operandos, si los hay realiza la suma, sino muestra un mensaje de error
    if ((valorA === "") || (valorB === "")) {
        let error = inputResultado.value = "La operación no incluye números";
        console.log("Resultado: " + error);
        return error;
    
    } else {
        let suma = inputResultado.value = Number(valorA) + Number(valorB);
        console.log("Resultado: " + suma);
        return suma;
    }
}