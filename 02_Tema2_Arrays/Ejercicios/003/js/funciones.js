// Dado un array con los días de la semana obtén todos los días que empiezan por ‘M’

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let diasM = dias.filter(dia => dia[0] == ("M"));
// let diasM = dias.filter(dia => dia.startsWith("M"));

console.log(diasM);