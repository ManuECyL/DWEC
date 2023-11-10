let intentos = 0;
const min = 1;
const max = 100;

// Calculamos un número aleatorio entre un mínimo y un máximo establecido en las variables anteriores 
let numeroAzar = Math.round(Math.random() * (max - min) + min);

console.log("Número oculto " + numeroAzar);

let numeroUsuario = prompt("Adivina el número entre " + min + " y " + max + " (o cancela para finalizar):");

intentos ++;

while (numeroUsuario != numeroAzar && numeroUsuario != null) {
    
    if (numeroUsuario > numeroAzar) {
        alert("(" + intentos + ") es mayor que el número pedido")
        numeroUsuario = prompt("Número entre " + min + " y " + max + " (o cancela para finalizar):");
    
    } else if (numeroUsuario < numeroAzar) {
        alert("(" + intentos + ") es menor que el número pedido")
        numeroUsuario = prompt("Número entre " + min + " y " + max + " (o cancela para finalizar):");
    }

    intentos ++;
}

if (numeroUsuario == null) {
    console.log("Número oculto: " + numeroAzar + "   Intentos: " + intentos);
    alert("El usuario ha cancelado el juego con " + intentos + " intentos");
}

if (numeroUsuario == numeroAzar) {
    console.log("Número acertado: " + numeroAzar + "   Intentos: " + intentos);
    alert("Número acertado: " + numeroAzar + "   Intentos: " + intentos);
}