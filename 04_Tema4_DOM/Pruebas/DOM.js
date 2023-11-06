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