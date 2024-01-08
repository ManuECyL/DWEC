const serverIP2='127.0.0.1';
//const serverIP2='<%= serverIP $>';
const port2=3000;
/*
const arrayTablas=['ciudades', 'paises', 'embalses', 'reyes', 'cuencas'];
function iniciar(){
    arrayTablas.forEach((tabla)=>{
        const nuevoLi=document.createElement('LI');
        nuevoLi
    });

}
document.addEventListener('DOMContentLoaded', iniciar);
*/

// public/js/index.js

// Array de objetos con URLs y textos
const datos = [
    { url: `http://${serverIP2}:${port2}/ciudades`, texto: 'Ciudades de España' },
    { url: '#', texto: 'Países del Mundo' },
    { url: 'https://www.ejemplo3.m', texto: 'Embalses' },
    // Agrega más objetos según sea necesario
  ];
  
  // Función para generar la lista de enlaces
  function generarListaEnlaces() {
    // Selecciona el elemento UL en el HTML
    const listaEnlaces = document.getElementById('listaEnlaces');
  
    // Itera sobre los datos y crea un elemento de lista para cada URL y texto
    datos.forEach((elemento) => {
      const enlace = document.createElement('a');
      enlace.href = elemento.url;
      enlace.textContent = elemento.texto;
  
      const elementoLista = document.createElement('li');
      elementoLista.appendChild(enlace);
  
      // Agrega el elemento de lista a la lista UL
      listaEnlaces.appendChild(elementoLista);
    });
  }
  
  // Llama a la función al cargar la página
  window.onload = generarListaEnlaces;