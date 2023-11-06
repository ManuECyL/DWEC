// EJERCICIO: Siguiendo con la página de ejemplo obtén desde la consola, al menos de 2 formas diferentes:

// 1. El elemento con id ‘input2’
    let elemento1 = document.getElementById('input2');
    console.log(elemento1);

    // in2 = document.querySelector('#input2');
    // console.log(in2);

    let elementos = document.getElementsByTagName('input');
   // console.log(elementos); // Como es una colección, la transformamos en array
    elementos = Array.from(elementos);
    // console.log(elementos);
    elemento2 = elementos[1]; // Segundo elemento del array
    console.log(elemento2);

    console.log("");


// 2. La colección de párrafos
    let parrafos = document.getElementsByTagName('p');
    console.log(parrafos);

    parrafos = document.querySelectorAll('p'); // Obtiene Nodelist de p
    console.log(parrafos);
    
    console.log("");


// 3. Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
    let nodoLipsum = document.getElementById('lipsum');
    parrafos = nodoLipsum.getElementsByTagName('p');
    console.log(parrafos);

    nodoLipsum = document.getElementById('lipsum');
    parrafos = nodoLipsum.querySelectorAll('p');
    console.log(parrafos);

    console.log("");


// 4. El formulario (ojo, no la colección con el formulario sino sólo el formulario)
    let form = document.forms[0];
    console.log(form);

    form = Array.from(document.forms)[0];
    console.log(form);

    console.log("");

    
// 5. Todos los inputs
    let inputs = document.getElementsByTagName('input');
    console.log(inputs);

    inputs = document.querySelectorAll('input');
    console.log(inputs);

    console.log("");


// 6. Sólo los inputs con nombre ‘sexo’
    let inputSexo = document.getElementsByName('sexo');
    console.log(inputSexo);

    inputSexo = document.querySelectorAll('input');
    inputSexo = Array.from(inputSexo)[3] + Array.from(inputSexo)[4];
    // console.log(inputSexo);

    console.log("");


// 7. Los items de lista de la clase ‘important’ (sólo los LI)
    let lista = document.getElementsByTagName('ul')[0];
    let li = lista.getElementsByClassName('important');
    console.log(li);

    li = document.querySelectorAll('li.important');
    console.log(li);

    console.log("");


// 8. El primér párrafo que hay dentro del div ‘lipsum’ 
    let lipsum = document.getElementById('lipsum');
    parrafo1 = nodoLipsum.querySelectorAll('p')[0];
    console.log(parrafo1);

    parrafos = document.getElementsByTagName('p');
    console.log(parrafos[1]);

    console.log("");


// 9. El segundo párrafo de ‘lipsum’ 
    lipsum = document.getElementById('lipsum');
    parrafo2 = nodoLipsum.querySelectorAll('p')[1];
    console.log(parrafo2);

    parrafos = document.getElementsByTagName('p');
    console.log(parrafos[2]);
    
    console.log("");


// 10. El último item de la lista 
    let listaLipsum = lipsum.children;
    console.log(listaLipsum[listaLipsum.length - 1]);

    console.log(lipsum.lastElementChild);

    console.log("");


// 11. El elemento label de 'Escoge sexo'
    let arrayEtiqueta = Array.from(document.getElementsByTagName('label'));
    console.log(arrayEtiqueta[arrayEtiqueta.length - 1]);

    let inputSexo1 = document.getElementsByName('sexo');
    console.log(inputSexo1[0].parentElement);
    
    