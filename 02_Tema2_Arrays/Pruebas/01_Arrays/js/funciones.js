//Arrays

    // let a = new Array(); 
    // let b = new Array(2,4,6); 

    // let a = [];
    // let b = [2, 4, 6];

    let a = ['lunes', 'martes', 2, 4, 6]

    a[7] = 'Juan' // ahora a = ['Lunes', 'Martes', 2, 4, 6, , , 'Juan']
    console.log(a[5]) // imprime indefinido

    let b = 6;
    console.log(b[0]);

    b = "pepe";
    console.log(b[2]); // imprime undefined
    console.log(b[0]);

    console.log("");


// ARRAY DE OBJETOS
    let alumno1 = {
        id: 1,
        nombre: "Miguel"
    };

    let alumno2 = {
        id: 2,
        nombre: "Fernando"
    };

    let alumno3 = {
        id: 3,
        nombre: "Manuel"
    };

    let alumnos = [alumno1, alumno2];

    console.log(alumnos);


// PROPIEDADES Y MÉTODOS DE LOS ARRAYS
    console.log(alumnos.length);
    console.log(alumnos.push(alumno3));

    let ar = [2,4,6];
    console.log(ar.toString());

    // JOIN
    let br = ar.join('-');
    console.log(br);

    let frutas = ["peras", "manzanas"];
    console.log(frutas.toString());

    let cr = frutas.join('');
    console.log(cr);


    // SPLIT
    let d = "Miguel Barba Domínguez";
    let arrayD  = d.split(' ');
    console.log(arrayD);


    // SORT
    let e = ['hola','adios','Bien','Mal'];

