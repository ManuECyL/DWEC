let tvSamsung = {
    nombre: "TV Samsung 42",
    categoria: "Televisores",
    unidades: 4,
    precio: 345.95,
    importe: () => 'El valor total de las unidades es = ' + (unidades * precio) + "€"
}

for (let prop in tvSamsung) {
    console.log(prop + ": " + tvSamsung[prop]);
}
