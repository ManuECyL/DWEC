// Obtener el TagName de un elemento a partir del Id
let elemento = document.getElementById("hola");

console.log(elemento.tagName);


// Obtener los elementos de un div en forma de array
    let arrayDivs = Array.from(document.getElementsByTagName("div"))[0];
    console.log(arrayDivs);



// const divContenedor = document.getElementsByTagName("div");
const divContenedor = document.getElementById("contenedor");

let nodosHijos = divContenedor.querySelectorAll("*");

let arrayHijos = Array.from(nodosHijos);

// console.log(nodosHijos);
console.log(arrayHijos);