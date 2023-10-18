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
    console.log("");


    // SPLIT
    let d = "Miguel Barba Domínguez";
    let arrayD  = d.split(' ');

    console.log(arrayD);
    console.log("");


    // SORT
    let e = ['hola','adios','Bien','Mal'];
    e.sort();

    console.log(e);
    console.log("");

    // Ordena alfabéticamente
    let f = ['hola','adios','Bien','Mal'];
    let g = f.sort(function(e1, e2) {
        
        if (e1.toLocaleLowerCase() < e2.toLocaleLowerCase()) {
            return -1;
        
        } else if (e1.toLocaleLowerCase() > e2.toLocaleLowerCase()) {
            return 1;
        
        } else {
            return 0;
        }
    });

    console.log(g);
    console.log("");

    // Ordena de forma ascendente
    let h = [20, 4, 87, 2];
    let i = h.sort(function(e1, e2) {
        
        let resta = e1 - e2;
        return resta;
    });

    console.log(i);

    // Ordena de forma descendente
    let j = h.sort(function(e1, e2) {
        
        return e2 - e1;
    });

    console.log(j);
    console.log("");

    // Ordenar arrays de objetos con sort por edad ascendente
    function ordenarEdad(p1, p2) {
        return p1.edad - p2.edad;
    }

    let persona1 = {nombre: 'Juan', edad: 25};
    let persona2 = {nombre: 'Benito', edad: 52};
    let persona3 = {nombre: 'Ana', edad: 33};

    let personas = [persona1, persona2, persona3];

    let personasOrdenado = personas.sort(ordenarEdad);
    
    console.log(personasOrdenado);

    // Ordenar arrays de objetos con sort y función flecha por edad descendente
    let personasOrdenado2 = personas.sort((p1, p2) => p2.edad - p1.edad);

    console.log(personasOrdenado2);
    console.log("");

    // Ordenar arrays de objetos con sort alfabéticamente
    let personasAlfabetico = personas.sort((persona1, persona2) => {

        if (persona1.nombre.toLocaleLowerCase() < persona2.nombre.toLocaleLowerCase()) {
            return -1;      
        
        } else if (persona1.nombre.toLocaleLowerCase() > persona2.nombre.toLocaleLowerCase()) {
            return 1;
        
        } else {
            return 0;
        }
    });

    console.log(personasAlfabetico);