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