// document.getElementById('prueba').addEventListener('click', manejar);

let alumno = "Manuel";

function manejar(p1, p2, e) {
    // console.log(`${alumno} dice hola`);
    console.log(this);
    console.log(p1);
    console.log(p2);
    console.log(e.target);
}

document.getElementById('prueba').addEventListener('click', manejar.bind('hola', 6, 7));