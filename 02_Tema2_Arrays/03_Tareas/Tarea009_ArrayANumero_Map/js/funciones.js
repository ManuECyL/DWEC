// Dado un array de notas, convertir todos los valores a número
let notas = ['4', 5, '7', 0];

console.log(notas);

let arrayNumerico = notas.map(nota => Number(nota));
// let arrayNumerico = notas.map(Number);

console.log(arrayNumerico);


