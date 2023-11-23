// let elementosBody = Array.from(document.getElementsByTagName('body'))[0];
// console.log(elementosBody);

// console.log(elementosBody[0]);

let divPrimero = document.createElement('div');
    divPrimero.id = "divPrimero";

let divSegundo = document.createElement('div');
    divSegundo.id = "divSegundo";


let primerElementoBody = document.body.firstElementChild;
let primerScript = document.body.lastElementChild.previousElementSibling;


//1. Inserta el primer div al principio del body
document.body.insertBefore(divPrimero, primerElementoBody);


//2. Inserta el segundo div al final del body
document.body.insertBefore(divSegundo, primerScript);


// 3. Pasar elementos originales body al segundo div
divSegundo.appendChild(primerElementoBody);

for (let i = 0; i <= document.body.childElementCount + 5; i++) {
    divSegundo.appendChild(document.body.firstElementChild.nextElementSibling);
}


// 4. Genere un índice sobre los elementos H1 y H2 del apartado anterior en el div superior
let elementoH1 = document.getElementsByTagName('h1');
let elementoH2 = document.getElementsByTagName('h2');


let ul = document.createElement('ul');
let li = document.createElement('li');
    // ul.appendChild(elementoH1);
    // li.appendChild(elementoH2);
    ul.appendChild(li);

divPrimero.appendChild(ul);