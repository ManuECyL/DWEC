// public/js/consumirApi.js

function generarListaTablas() {
    const listaTablas = document.getElementById('listaTablas');
    fetch('/tablas')
      .then(response => response.json())
      .then(data => {
        const tablas = data.tablas;
        tablas.forEach(tabla => {
          const elementoLista = document.createElement('li');
          elementoLista.textContent = tabla;
          elementoLista.addEventListener('click', () => obtenerRegistrosTabla(tabla));
          listaTablas.appendChild(elementoLista);
        });
      })
      .catch(error => console.error('Error al obtener la lista de tablas:', error));
  }
  
  function obtenerRegistrosTabla(nombreTabla) {
    console.log('pppppp');
    const registrosTabla = document.getElementById('registrosTabla');
    fetch(`/${nombreTabla}`)
      .then(response => response.json())
      .then(data => {
        const registros = data.registros; //ERROR 
        console.log(data);
        const listaRegistros = document.createElement('ul');
        //registros.forEach(registro => {
        data.forEach(registro => {
          const elementoLista = document.createElement('li');
          elementoLista.textContent = JSON.stringify(registro);
          listaRegistros.appendChild(elementoLista);
        });
        registrosTabla.innerHTML = `<h2>Registros de la tabla ${nombreTabla}</h2>`;
        registrosTabla.appendChild(listaRegistros);
      })
      .catch(error => console.error(`Error al obtener registros de la tabla ${nombreTabla}:`, error));
  }
  
  window.onload = generarListaTablas;
  