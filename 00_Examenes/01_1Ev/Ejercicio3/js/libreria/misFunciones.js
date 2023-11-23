function formatearA3cifras(numero) {
    return (numero.toLocaleString(undefined,{minimumIntegerDigits: 3, useGrouping: false}));
}


export const misFunciones = {
    formatearA3cifras, 
    nombrePropio,
    primeraPalabra
  }