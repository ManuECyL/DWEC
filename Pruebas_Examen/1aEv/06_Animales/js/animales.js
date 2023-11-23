function darEstiloDivs(idDiv, color) {
    
    let div = document.getElementById(idDiv);
        div.style.fontFamily = "arial";
        div.style.backgroundColor = color;
}

darEstiloDivs("div01", "Lightblue");
darEstiloDivs("div02", "Silver");
darEstiloDivs("div03", "Orange");
darEstiloDivs("div04", "Lightyellow");

let arrayAnimales = [];

function añadirAnimales() {

    let datosAnimales = [    
        { id: 1, especie: 'León', grupo: 'Mamíferos', longevidad: 14 },
        { id: 2, especie: 'Cocodrilo', grupo: 'Reptiles', longevidad: 50 },
        { id: 3, especie: 'Caballo', grupo: 'Mamíferos', longevidad: 30 },
        { id: 4, especie: 'Camaleón', grupo: 'Reptiles', longevidad: 8 },
        { id: 5, especie: 'Iguana', grupo: 'Reptiles', longevidad: 20 },
        { id: 6, especie: 'Ratón', grupo: 'Mamíferos', longevidad: 2 }
    ];

    for (let i = 0; i < datosAnimales.length; i++) {
        arrayAnimales.push(datosAnimales[i]);
    }       
}

// Función para agregar nuevos animales al array
function agregarNuevoAnimal(id, especie, grupo, longevidad) {
    let nuevoAnimal = { id: id, especie: especie, grupo: grupo, longevidad: longevidad };
    animales.push(nuevoAnimal);
}

añadirAnimales();


// Función que reciba un array de animales  y devuelva un nodo lista desordenada
function listaAnimalesDesordenada(arrayAnimales) {
    
    // Crear elemento de lista desordenada
    let ul = document.createElement('ul');

    // Iterar sobre el array de animales y agregar cada animal como un elemento de lista (LI)
    for (let i = 0; i < arrayAnimales.length; i++) {
        let animal = arrayAnimales[i];

        // Crear un elemento de lista (LI) para cada animal
        let li = document.createElement('li');

        // Agregar el texto con la información del animal al elemento de lista
        li.textContent = `${animal.especie} (${animal.grupo}) vive unos ${animal.longevidad} años`;

        // Agregar el elemento de lista al nodo de lista desordenada
        ul.appendChild(li);
    }

    return ul;
}

// Visualizar la lista de animales en el apartado correspondiente.
let listaAnimales = listaAnimalesDesordenada(arrayAnimales);
let div02 = document.getElementById("div02");
    div02.appendChild(listaAnimales);



// Función para ordenar la lista de animales por especies
function ordenarPorEspecie() {
    
    let animalesOrdenados = arrayAnimales.slice().sort((animal1,animal2) => animal1.especie.localeCompare(animal2.especie));
    let listaOrdenadaAnimales = listaAnimalesDesordenada(animalesOrdenados) ;
    let divLista = document.getElementById('div02');

    // Limpiar el contenido actual y agregar la lista ordenada
    while (divLista.firstChild) {
        divLista.removeChild(divLista.firstChild);
    }

    divLista.innerHTML = "VISUALIZAR TABLA";

    divLista.appendChild(listaOrdenadaAnimales);
}


// Función para ordenar la lista de animales por longevidad
function ordenarPorLongevidad() {
    
    let animalesOrdenados = arrayAnimales.slice().sort((animal1,animal2) => animal1.longevidad - animal2.longevidad);
    let listaOrdenadaAnimales = listaAnimalesDesordenada(animalesOrdenados) ;
    let divLista = document.getElementById('div02');

    // Limpiar el contenido actual y agregar la lista ordenada
    while (divLista.firstChild) {
        divLista.removeChild(divLista.firstChild);
    }

    divLista.innerHTML = "VISUALIZAR TABLA";

    divLista.appendChild(listaOrdenadaAnimales);
}


// Poner en el apartado ORDENAR un botón para cambiar la visualización para que esté ordenado por nombre de especie.
let botonEspecie = document.createElement("button");
    botonEspecie.id = "btnEspecie";
    botonEspecie.textContent = "Ordenar Alfabético Especie";
    botonEspecie.onclick = ordenarPorEspecie;

// Poner en el apartado ORDENAR un botón para cambiar la visualización para que esté ordenado por longevidad.
let botonLongevidad = document.createElement("button");
    botonLongevidad.id = "btnLongevidad";
    botonLongevidad.textContent = "Ordenar por Longevidad";
    botonLongevidad.onclick = ordenarPorLongevidad;

// Añadir botones al div correspondiente
let div03 = document.getElementById("div03");
    div03.appendChild(botonEspecie);
    div03.appendChild(botonLongevidad);


// Escribir una función llamada extraerGrupos() que reciba un array de animales y devuelva un array (sin repeticiones) con los nombres de los grupos que haya en el array de animales
function extraerGrupos(arrayAnimales) {
    
    // Crear un conjunto para almacenar los nombres de los grupos sin repeticiones
    let gruposSinRepeticiones = new Set();

    // Iterar sobre el array de animales y agregar los nombres de los grupos al conjunto
    for (let i = 0; i < arrayAnimales.length; i++) {

        let animal = arrayAnimales[i];
        gruposSinRepeticiones.add(animal.grupo);
    }

    // Convertir el conjunto de nuevo a un array
    let arrayGrupos = Array.from(gruposSinRepeticiones);

    return arrayGrupos;
}

// Mostrar en el apartado GRUPOS DE ANIMALES los nombres de los grupos que hay actualmente en la tabla de animales
let grupos = extraerGrupos(arrayAnimales);
let div04 = document.getElementById('div04');
    div04.textContent = grupos.toString();
