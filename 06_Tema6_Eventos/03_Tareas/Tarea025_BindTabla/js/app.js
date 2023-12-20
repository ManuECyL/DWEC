/*
Ejercicio: Crear una tabla con varias filas y columnas que tenga dentro de cada celda los valores de un array. Según
    se haga clic en cada celda, que se muestre en consola el contenido de dicha celda.
*/

const arrayCeldas = document.getElementById("tabla1").querySelectorAll('td');

arrayCeldas.forEach((elemento) => {
    // elemento.innerText = indice;

    // Sin bind
        // elemento.addEventListener('click', mostrarContenido); 

    // Con bind
    elemento.addEventListener('click', mostrarContenido.bind(elemento));
});


function mostrarContenido() {
    console.log(this.innerText);
}


// Cambiar el valor de la celda según se haga click, aumentandolo 

let valor = 0;

// Dejamos las celdas sin valor
arrayCeldas.forEach((elemento) => {
    elemento.innerText = ' ';
});

arrayCeldas.forEach((elemento) => {
    elemento.addEventListener('click', aumentarValor.bind(elemento, valor));
});


function aumentarValor(valor) {
    this.innerText = parseInt(valor);
    valor ++;
}