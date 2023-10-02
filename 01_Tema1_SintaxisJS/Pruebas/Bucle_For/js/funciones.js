datos = [5,23,12,85];
let totalSuma = 0;

for (let i = 0; i < datos.length; i++) {
    console.log(datos[i]);

    totalSuma += datos[i];
}

console.log("La suma de todos los datos es = " + totalSuma);