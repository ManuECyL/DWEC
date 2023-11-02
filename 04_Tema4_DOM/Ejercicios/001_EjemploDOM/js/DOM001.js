// EJERCICIO: Siguiendo con la página de ejemplo obtén desde la consola, al menos de 2 formas diferentes:

// 1. El elemento con id ‘input2’
    let elemento1 = document.getElementById('input2');
    console.log(elemento1);

    let elementos = document.getElementsByTagName('input');
    console.log(elementos); // Como es una colección, la transformamos en array
    elementos = Array.from(elementos);
    console.log(elementos);
    elemento2 = elementos[1]; // Segundo elemento del array
    console.log(elemento2);


// 2. La colección de párrafos
    let parrafos = document.getElementsByTagName('p');
    console.log(parrafos);

    parrafos = document.querySelectorAll('p'); // Obtiene Nodelist de p
    console.log(parrafos);
    

// 3. Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’
    let nodoLipsum = document.getElementById('lipsum');
    parrafos = nodoLipsum.getElementsByTagName('p');
    console.log(parrafos);

    nodoLipsum = document.getElementById('lipsum');
    parrafos = nodoLipsum.querySelectorAll('p');
    console.log(parrafos);


// 4. El formulario (ojo, no la colección con el formulario sino sólo el formulario)
    let form = document.getElementsByTagName('form');
    console.log(form);

    
// 5. Todos los inputs
    let inputs = document.getElementsByTagName('input');
    console.log(inputs);

    inputs = document.querySelectorAll('input');
    console.log(inputs);


// 6. Sólo los inputs con nombre ‘sexo’
    let inputSexo = document.getElementsByName('sexo');
    console.log(inputSexo);

    inputs = Array.from(inputs);
    console.log(inputs);
    inputSexo = inputs[3], inputs[4];
    console.log(inputSexo);


// 7. Los items de lista de la clase ‘important’ (sólo los LI)
    let important = document.getElementsByClassName('important');

    console.log(important);