const arrayTd = Array.from(document.getElementsByTagName("td"));

arrayTd.forEach(td => {td.addEventListener('dblclick', cambiarColor)});

function cambiarColor() {
    
    this.style.backgroundColor = "green";
}
