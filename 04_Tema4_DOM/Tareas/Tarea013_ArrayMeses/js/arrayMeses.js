let contador = 0;
let avanza = true;

const arrayMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let boton = document.createElement('button');
    boton.style.margin = "30px";
    boton.style.color = "white";
    boton.addEventListener('click', añadirQuitarMes);
    document.body.appendChild(boton);

let olMeses = document.createElement('ol');
    document.body.appendChild(olMeses);

if (avanza == true) {
    boton.innerText='Añadir';
    boton.style.backgroundColor='green';
}

function añadirQuitarMes() {

    if ((avanza == true) && (contador < arrayMeses.length)) {
        
        let mes = arrayMeses[contador];

        let li = document.createElement('li');
        let liTexto = document.createTextNode(mes);
            li.appendChild(liTexto);
            olMeses.appendChild(li);

            
        contador ++;

        if (contador == arrayMeses.length) {
            avanza = false;
            boton.innerText = "Quitar";
            boton.style.backgroundColor = 'red';
        }
    
    } else if ((avanza == false) && (contador <= arrayMeses.length)) {

        let liUltimo = olMeses.lastElementChild;

        olMeses.removeChild(liUltimo);

        contador --;

        if (contador == 0) {
            avanza = true;
            boton.innerText = "Añadir";
            boton.style.backgroundColor = 'green';
        }
    }
}
