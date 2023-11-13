function formatearA3cifras(numero) {
    return ("IdBola"+numero.toLocaleString(undefined,{minimumIntegerDigits: 3, useGrouping: false}));
}

function numeroAleatorio(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}


function indiceAleatorioArray(array) {
  let indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

export const misFunciones = {
  formatearA3cifras, 
  numeroAleatorio,
  indiceAleatorioArray
}