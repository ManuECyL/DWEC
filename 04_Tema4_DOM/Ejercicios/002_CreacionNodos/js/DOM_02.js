let miDiv = document.getElementById('articulos'); 
 
miDiv.innerHTML += '<p>Párrafo añadido al final</p>'; 
 
let nuevoSegundoParrafo = document.createElement('p'); 
nuevoSegundoParrafo.innerHTML = 'Este es el <strong>nuevo</strong> segundo párrafo'; 
 
// let segundoParrafo = miDiv.children[1]; // Obtiene la posicion de el 2º párrafo del div 
// miDiv.insertBefore(nuevoSegundoParrafo, segundoParrafo);


const segundo = document.getElementById('articulos').getElementsByTagName('p')[1];
document.getElementById('articulos').insertBefore(nuevoSegundoParrafo, segundo);