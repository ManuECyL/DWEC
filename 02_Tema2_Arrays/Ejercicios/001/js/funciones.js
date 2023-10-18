let listaFrutas = ["Peras", "Manzanas", "Kiwis", "Plátanos", "Mandarinas"];
console.log(listaFrutas);

listaFrutas.splice(1,1);
console.log(listaFrutas);

listaFrutas.splice(listaFrutas.length - 1, 0, "Naranjas", "Sandía");
console.log(listaFrutas);

listaFrutas.splice(1, 1, "Cerezas", "Nísperos");
console.log(listaFrutas);