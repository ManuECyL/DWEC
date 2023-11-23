'use strict'

// Función para crear el div en el que insertar las listas
function crearDivPrincipal(idDiv) {

    let divPrincipal = document.createElement('div');
        divPrincipal.setAttribute('style', `font-family: arial;`);
        divPrincipal.id = "idDivPrincipal";

    let listaCiudades = document.getElementsByTagName('ol')[0];
        listaCiudades.parentElement.insertBefore(divPrincipal,listaCiudades); // Insertar el div delante del primer OL

    let listaHabitantes = document.getElementsByTagName('ul')[0];

    divPrincipal.appendChild(listaCiudades);
    divPrincipal.appendChild(listaHabitantes);

    return divPrincipal;
}

function darEstilos() {
    // Poner color de fondo a la página
    document.documentElement.setAttribute('style', `background-color: silver; text-align: center`)
    
    // Atributos del divPrincipal -> Ambas listas esté centrado en la ventana
    document.getElementById('idDivPrincipal').style.display = 'flex';
    document.getElementById('idDivPrincipal').style.justifyContent = 'center';

    // Alineación de las listas
    let listaCiudades = document.getElementsByTagName('ol')[0];
    let listaHabitantes = document.getElementsByTagName('ul')[0];
        listaCiudades.style.textAlign = "left";
        listaHabitantes.style.textAlign = "right";
}

let divPrincipal = crearDivPrincipal('idDivPrincipal');
darEstilos();


// Función que reciba un array con los elementos (LI) de la lista ordenada y otro array con los elementos (LI) de la lista desordenada
function arraysListas(listaCiudades, listaHabitantes) {
    
    let ciudades = [];

    //ciudad={nombre: 'Burgos', habitantes:156325}
    for (let i = 0; i < listaCiudades.length; i++) {
        
        let nuevaCiudad = {nombre: `${listaCiudades[i].innerText}`,
            habitantes: `${parseFloat(listaHabitantes[i].innerText)}`}

        ciudades.push(nuevaCiudad);
    }

    return ciudades;
}

// NodeList con los elementos 'li' de las listas
let nombres = document.getElementById('idCiudades').querySelectorAll('li');
let habitantes = document.getElementById('idHabitantes').querySelectorAll('li');

let ciudades = arraysListas(nombres, habitantes);

// Copia del array de ciudades para poder realizar las ordenaciones
let ordenNombre = ciudades.slice();
let ordenHabitantes = ciudades.slice();

// Ordenación de las copias del array ciudades
    // Compara los nombres de las distintas ciudades para ordenarlas 
ordenNombre = ordenNombre.sort((ciudad1, ciudad2) => ciudad1.nombre.localeCompare(ciudad2.nombre));

    // Determina la diferencia en el número de habitantes entre ciudad1 y ciudad2 para ordenarlas de forma ascendente
ordenHabitantes = ordenHabitantes.sort((ciudad1, ciudad2) => ciudad1.habitantes - ciudad2.habitantes);


function ordenarLista(arrayObjetosCiudades) {
    
    let listaCiudadesDesordenada = document.getElementsByTagName('ol')[0];
    let listaHabitantesDesordenada = document.getElementsByTagName('ul')[0];
    
    let listaCiudades = listaCiudadesDesordenada.querySelectorAll('li');
    let listaHabitantes = listaHabitantesDesordenada.querySelectorAll('li');

    for (let i = 0; i < listaCiudades.length; i++) {
        listaCiudades[i].innerText = arrayObjetosCiudades[i].nombre;
    }
    
    for (let i = 0; i < listaHabitantes.length; i++) {
        listaHabitantes[i].innerText = arrayObjetosCiudades[i].habitantes;
    }
}

// Comprobar que radio está seleccionado para ordenar las listas
function ordenar() {
    
    if (document.getElementById('radio1').checked == true) {
        ordenarLista(ciudades);
    
    } else if (document.getElementById('radio2').checked == true) {
        ordenarLista(ordenNombre);
    
    } else if (document.getElementById('radio3').checked == true) {
        ordenarLista(ordenHabitantes);
    }
}


// Función para crear un div en el que insertar los input radio
function crearDivRadios() {

    let divRadios = document.createElement('div');
        divRadios.style='clear: both';
        divRadios.id = 'idDivRadios';

    let footer = document.getElementsByTagName('footer')[0];

    document.body.insertBefore(divRadios, footer);
    
    return divRadios;
}

// Función para crear los distintos botones tipo radio
function crearRadios(id, name, label, activo) {
    
    let radio = document.createElement('input');
        radio.id = `${id}`;
        radio.name = `${name}`;
        radio.type = 'radio';
        radio.checked = activo;
        radio.addEventListener('click', ordenar);

    let labelR = document.createElement('label');
        labelR.innerText = `${label}`;
        labelR.style = 'color: blue';

    divRadios.appendChild(radio);
    divRadios.appendChild(labelR);
}

// Insertar botones radio dentro del html
let divRadios = crearDivRadios();
let radio1 = crearRadios('radio1', 'orden', 'Sin ordenar |', true);
let radio2 = crearRadios('radio2', 'orden', 'Por Nombre |', false);
let radio3 = crearRadios('radio3', 'orden', 'Por Habitante', false);