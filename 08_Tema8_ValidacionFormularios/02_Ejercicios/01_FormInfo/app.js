let select = document.getElementById("genres");
// let seleccionados = Array.from(select.options).filter(option => option.selected).map(option => option.value);

let opciones = Array.from(select.options);

opciones.forEach(opcion => {
    
    if (opcion.selected) {
        alert(opcion.value + " " + opcion.text);
    }
});

