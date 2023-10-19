// Dado un array con los días de la semana indica si algún día empieza por ‘S’. Dado un array con los días 
    // de la semana indica si todos los días acaban por ‘s’

let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Comprobar si algún día empieza con la letra 'S'
let diasEmpiezanS = diasSemana.some(dia => dia[0] == "S");

// Comprobar si todos los días terminan con la letra 's'
let diasTerminanS = diasSemana.every(dia => dia[dia.length - 1] == "s");


console.log(diasEmpiezanS);
console.log(diasTerminanS);