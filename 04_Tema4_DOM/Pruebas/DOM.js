/*

// Acceso a los nodos
    console.log(document.childNodes);

    // Muestra los elementos 'h1' dentro del html
    const nodosH = document.getElementsByTagName('h1');
    console.log(nodosH);
    console.log(nodosH[0]); // -> Colección con el primer elemento con etiqueta 'h1'

    // Muestra los elementos 'p' dentro del 'h1'
    const nodosP = nodosH[0].getElementsByTagName('p');
    console.log(nodosP);
    console.log(nodosP[0]); // -> Colección con el primer elemento con etiqueta 'p'

    // Muestra la colección de los scripts de la página
    console.log(document.scripts);

    console.log("");


// Manipulación del DOM

    // Añadir un elemento 'li' dentro de la lista 'ul'
    const nuevoLi =  document.createElement('li');
    const nuevoTexto = document.createTextNode("tercero");
        nuevoLi.appendChild(nuevoTexto); // Añade el texto al elemento 'li'

    // Añade el elemento 'li' al final de la lista 'ul'
    // document.getElementsByTagName('ul')[0].appendChild(nuevoLi);

    document.querySelector('ul').firstChild.before(nuevoLi); // Añade el elemento 'li' creado al principio de la lista 'ul'


// Tenemos un código HTML con un DIV que contiene 3 párrafos y vamos a añadir un nuevo párrafo al final del  div con el texto ‘Párrafo añadido al final’ y otro que sea el 2º del div con el texto ‘Este es el nuevo segundo párrafo’:
    let miDiv = document.getElementById('articulos'); 
    miDiv.innerHTML += '<p>Párrafo añadido al final</p>'; 
    
    let nuevoSegundoParrafo = document.createElement('p'); 
    nuevoSegundoParrafo.innerHTML = 'Este es el <strong>nuevo</strong> segundo párrafo'; 
    
    // Obtiene la posicion de el 2º párrafo del div
        // let segundoParrafo = miDiv.children[1];  
    // Añade el parrafo creado antes de la posicion anterior obtenida
        // miDiv.insertBefore(nuevoSegundoParrafo, segundoParrafo);

    // Obtiene la posicion de el 2º párrafo del div
    const segundo = document.getElementById('articulos').getElementsByTagName('p')[1];

    // Añade el parrafo creado antes de la posicion anterior obtenida
    document.getElementById('articulos').insertBefore(nuevoSegundoParrafo, segundo);

*/

// Estilos con DOM
    const primerH1 = document.getElementsByTagName('h1')[0];
    console.log(primerH1);

    // Añadimos la clase rojo y  clase centrado definidas en el fichero CSS al primer elemento 'h1'
    primerH1.classList.add('rojo', 'centrado');
    console.log(primerH1.classList);
    
    // Eliminamos la clase rojo del elemento 'h1'
    primerH1.classList.remove('rojo');
    console.log(primerH1.classList);

    // Dar color cambiando el atributo style fuera del CSS
    const ultimo = document.getElementsByTagName('li')[document.getElementsByTagName('li').length - 1];
    console.log(ultimo);
    ultimo.setAttribute('style', 'color: green');
    console.log(ultimo.attributes);

    const primero = document.getElementsByTagName('li')[0];
    console.log(primero.attributes);
    console.log(primero.attributes[0].value);
    
    if (primero.hasAttribute("style")) {
        primero.setAttribute('style', ultimo.attributes[0].value);
    }    

    // console.log(primero.attributes);