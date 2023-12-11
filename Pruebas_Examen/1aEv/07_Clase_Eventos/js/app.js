let contador = 0;

const mostrarContenido = function(var1, var2) {
    console.log(this);    
    // this.innerHTML += ++contador + "-";

    console.log(var1);
    console.log(var2);
} 

const arrayTD = Array.from(document.querySelectorAll("td"));
console.log(arrayTD);

arrayTD.forEach((celda, indice) => {
    celda.innerHTML = "";
    celda.addEventListener("click", mostrarContenido.bind(indice, "Federico"));
});

    
