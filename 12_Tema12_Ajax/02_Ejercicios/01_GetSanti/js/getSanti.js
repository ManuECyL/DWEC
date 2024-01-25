document.getElementById('b1').addEventListener('click', realizaSolicitudSanti);

const ul = document.getElementById('listaCiudades');
 
function pintar(datos, lugar){

    datos.forEach(ciudad => {

        if(ciudad.cantidad > min && ciudad.cantidad < max){

            const nuevoElementoLi = document.createElement('LI');
                nuevoElementoLi.textContent = ciudad.nombre;
                nuevoElementoLi.style.cursor = 'pointer';
                nuevoElementoLi.textContent = ciudad.nombre + ": " + ciudad.cantidad;
        
            lugar.appendChild(nuevoElementoLi);
        }
 
    });
}
 
 
function realizaSolicitudSanti(){

    const peticion = new XMLHttpRequest();
    
    const url='http://192.168.7.100:3000/ciudades?cantidad>min&cantidad<max';

    peticion.open('GET', url, true);

    peticion.onreadystatechange = function(){

        if (peticion.readyState == 4){

            if(peticion.status == 200){

                let datos= JSON.parse(peticion.responseText)
                pintar(datos, ul);

            } else {
                console.error("mala suerte: códido de error", peticion.status);
            }
        }
    }

    peticion.send();
}