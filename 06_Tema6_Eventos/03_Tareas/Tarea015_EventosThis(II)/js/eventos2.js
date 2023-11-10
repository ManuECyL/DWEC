const arrayTd = Array.from(document.getElementsByTagName("td"));

let contador = 1;

function cambiarColor() {
    this.style.backgroundColor = "pink";
}

function cambiarContenido() {
    this.innerHTML = contador + ' - ' + this.innerHTML;    
    contador ++;
    this.removeEventListener("dblclick", cambiarContenido);
}

arrayTd.forEach(td => {
    td.addEventListener('dblclick', cambiarColor);
    td.addEventListener('dblclick', cambiarContenido);
});