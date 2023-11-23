let uno = "azul";
var dos = "verde";

if (true) {
    let uno = "gris";
    var dos = "negro";

    console.log(uno); // Gris
    console.log(dos); // Negro
}

if (false) { // No entra en el if porque no se cumple la condición
    let uno = "gris";
    var dos = "negro";

    console.log(uno);
    console.log(dos); 
}

console.log(uno); // Azul
console.log(dos); // Negro