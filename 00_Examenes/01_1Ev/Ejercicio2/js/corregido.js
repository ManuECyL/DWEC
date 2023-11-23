document.addEventListener('DOMContentLoaded', function () {

    // Paso 1: Crear un div como primer elemento de body
    const divSuperior = document.createElement('div');
    document.body.insertBefore(divSuperior, document.body.firstChild);

    // Paso 2: Crear un div como último elemento de body
    const divInferior = document.createElement('div');

    // Paso 3: Mover todos los elementos del body al div inferior (excepto scripts)
    const elementosBody = document.body.children;
    const elementosParaMover = [];

    for (let i = 0; i < elementosBody.length; i++) {

        if (elementosBody[i].tagName.toLowerCase() !== 'script') {
            elementosParaMover.push(elementosBody[i]);
        }
    }

    elementosParaMover.forEach(elemento => {
        divInferior.appendChild(elemento);
    });

    document.body.appendChild(divInferior);

    // Paso 4: Generar un índice sobre los elementos H1 y H2
    const indice = document.createElement('ul');

    let indiceNivel1; // Para llevar un seguimiento del nivel 1 actual en el índice

    document.querySelectorAll('h1, h2').forEach((elemento) => {
        const enlace = document.createElement('a');
        const listItem = document.createElement('li');

        enlace.textContent = elemento.textContent;
        enlace.href = `#${elemento.id}`;

        listItem.appendChild(enlace);

        if (elemento.tagName.toLowerCase() === 'h1') {
            // Si es un elemento H1, será índice de primer nivel
            indiceNivel1 = listItem;
            indice.appendChild(listItem);
            
        } else if (elemento.tagName.toLowerCase() === 'h2' && indiceNivel1) {
            // Si es un elemento H2, será índice de segundo nivel dentro de la sección correspondiente
            const sublist = document.createElement('ul');
            sublist.appendChild(listItem);
            indiceNivel1.appendChild(sublist);
        }
    });

    // Agregar el índice al div superior
    divSuperior.appendChild(indice);
});
