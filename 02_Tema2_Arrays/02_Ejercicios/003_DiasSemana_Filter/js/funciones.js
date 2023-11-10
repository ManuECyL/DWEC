// Dado un array con los días de la semana obtén todos los días que empiezan por ‘M’

let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// let diasM = diasSemana.filter(dia => dia[0] == ("M"));
// let diasM = dias.filter(dia => dia.startsWith("M"));

// console.log(diasM);

let diasM = diasSemana.filter(function(dia, indice) {
    
    if (dia[0] == "M") {
        console.log(indice + " : " + dia);
        return true;
    }
});

console.log(diasM);