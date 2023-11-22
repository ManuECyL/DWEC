function formatearA4cifras(numero) {
    return ("IdBola"+numero.toLocaleString(undefined,{minimumIntegerDigits: 4, useGrouping: false}));
}

// Función para devolver un nombre propio de una cadena
function nombrePropio(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}


export const misFunciones = {
    formatearA4cifras, 
    nombrePropio
  }