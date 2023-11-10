// Esta variable factorial la utilizaremos para calcular el factorial en el bucle for. Se inicia a 1 porque si se iniciase a 0 el resultado de la multiplicación sería 0
let factorial = 1;

// Esta variable la utilizamos para guardar los números y poder mostrar en el mensaje final las operaciones que se han realizado.
let numeros = ""

let numero = prompt("Introduce un número entero positivo");

// En este bucle for, se multiplicará el número introducido por el usuario por todos sus números anteriores hasta llegar al 1, inclusive
for (let i = numero; i > 0; i--) {
    factorial *= i;

    // En este if controlamos que en el mensaje final no se muestre una 'x' de más al final.
    if (i > 1) {
        numeros += i + "x";
    
    } else {
        numeros += i;
    }
}

console.log(numero + "! = " + numeros + " = " + factorial);
alert(numero + "! = " + numeros + " = " + factorial);