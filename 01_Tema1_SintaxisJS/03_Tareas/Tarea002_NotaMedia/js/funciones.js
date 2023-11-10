let suma = 0;
let contador = 0;

let notaUsuario = prompt("Introduzca una nota del 1 al 10 o pulse cancelar para finalizar y mostrar la media: ");

let notas = [];

while (notaUsuario != null && (notaUsuario < 1 || notaUsuario > 10)) {
    window.confirm("Nota no válida");
    notaUsuario = prompt("Introduzca una nota del 1 al 10 o pulse cancelar para finalizar y mostrar la media: ");
}

while (notaUsuario != null) {
    suma += parseFloat(notaUsuario);
    contador ++;

   notas.push(notaUsuario);

    notaUsuario = prompt("Introduzca una nota del 1 al 10 o pulse cancelar para finalizar y mostrar la media:");

    while (notaUsuario != null && (notaUsuario < 1 || notaUsuario > 10)) {
        window.confirm("Nota no válida");
        notaUsuario = prompt("Introduzca una nota del 1 al 10 o pulse cancelar para finalizar y mostrar la media: ");
    }
}

console.log("Notas: " + notas);
console.log("Suma = " + suma);
console.log("Contador = " + contador);

let media = parseFloat(suma / contador);

console.log("La media de los números introducidos es = " + media);
window.confirm("La media de los números introducidos es: " + media + "\n - Notas: " + notas + "\n - Suma = " + suma + "\n - Contador = " + contador);
