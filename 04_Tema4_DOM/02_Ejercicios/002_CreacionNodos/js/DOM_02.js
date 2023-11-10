let miDiv=document.getElementById('articulos'); 
 
miDiv.innerHTML+='<p>Párrafo añadido al final</p>'; 
 
let nuevoSegundoParrafo=document.createElement('p'); 
nuevoSegundoParrafo.innerHTML='Este es el <strong>nuevo</strong> segundo párrafo'; 
 
let segundoParrafo=miDiv.children[1]; 
miDiv.insertBefore(nuevoSegundoParrafo, segundoParrafo);

let ultimoParrafo = document.createElement('p'); 
ultimoParrafo.innerHTML = 'Párrafo añadido al final'; 
miDiv.appendChild(ultimoParrafo);