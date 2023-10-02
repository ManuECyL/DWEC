let alumno = {
    nombre: "Georgi",
    apellido1: "Borisov",
    apellido2: "Alexandrov"
};

let nombreCompleto = "";

for (let propiedad in alumno) {
    nombreCompleto += alumno[propiedad] + " ";
}

console.log(nombreCompleto);