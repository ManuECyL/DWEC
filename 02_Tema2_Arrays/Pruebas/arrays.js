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
    console.log("");


    // CONCAT
    let n = [2,4,6];
    let l = ['a', 'b', 'c'];
    let cc = n.concat(l.concat(n));
    console.log(cc);


    // REVERSE
    console.log(cc.reverse());


    // INDEX OF 
    console.log(n.indexOf(4));

    // LAST INDEX OF
    console.log(n.lastIndexOf('4'));
    console.log("");


    // Sin FILTER
    let arrayNotas0 = [5.2, 3.9, 6, 9.75, 7.5, 3];
    let aprobados0 = [];

    for (let i = 0; i < arrayNotas0.length; i++) {
        
        let nota0 = arrayNotas0[i];

        if (nota0 >= 5) {
            aprobados0.push(nota0);
        }   
    }

    console.log(aprobados0);

    // Con FILTER
    let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];
    
    // Tradicional
    let aprobados = arrayNotas.filter(function(nota) {
        
        if (nota >= 5) {
            return true;
        
        } else {
            return false;
        }
    });

    console.log(aprobados);

    // Con Flecha
    let aprobados2 = arrayNotas.filter((nota) => nota >= 5)
        
    console.log(aprobados2);
    console.log("");


    // MAP
    let arrayNotasMap = [5.2, 3.9, 6, 9.75, 7.5, 3];

    let arrayNotasSubidas = arrayNotasMap.map(nota => nota + nota * 0.1);

    console.log(arrayNotasSubidas);
    console.log("");


    // REDUCE -> Suma de las notas de un array
    let arrayNotasReduce = [4,7,5];

    let suma = 0;

    suma = arrayNotasReduce.reduce((total,valor) => {
        return total += valor;
    }, 0);

    console.log(suma);
    console.log("");

    let arrayNotasReduce2 = [5.2, 3.9, 6, 9.75, 7.5, 3];


    // Si la nota es > que max devuelve la nota, sino (:) devuelve maximo (11)
    let notaMaxima = arrayNotasReduce2.reduce((max,nota) => nota > max ? nota : max, 11);
    console.log(notaMaxima);
    console.log("");


    // Integrar un array a partir de varios arrays
    let integrado = [[0,1], [2,3], [4,5]].reduce(function(a,b) {
        return a.concat(b);
    });

    console.log(integrado);
    console.log("");


    // Cadena de montaje, se van añadiendo piezas a la cadena de texto inicial
    const partesDelCoche = ["asientos", "volante", "puertas", "ruedas", "pintura metalizada"];

    const coche = partesDelCoche.reduce(function (valorAnterior, valorActual) {
        return `${valorAnterior} ${valorActual},`;
    }, "Mi coche tiene:");

    console.log(coche);
    console.log("");


    // FOREACH
    arrayNotas.forEach((nota, indice, array) => console.log("Posición: " + indice + ", Elemento: " + nota));
    console.log("");


    // ARRAY.FROM
    let arrayNuevo = Array.from(arrayNotas, (nota, indice) => console.log(nota + indice));
    console.log("");

    let pCollection = document.getElementsByTagName('p');
    
    let pArray = Array.from(pCollection);
    console.log(pArray);    


    let a  = {id: 2, name:'object 2', address: {street: 'C/ Ajo', num: 3}};
    let cadena = JSON.stringify(a);
    console.log(cadena);
    console.log("");

    // Hace la sentencia anterior a la inversa. Se debe copiar el resultado de la consola de la sencuencia anterior(propiedades del objeto entre comillas) y pegar en este paso y escribilo entre comillas simples.
    let otraCadena = '{"id":2,"name":"object 2","address":{"street":"C/ Ajo","num":3}}';
    console.log(otraCadena);
    console.log("");
    
    let otroObjeto = JSON.parse(otraCadena);
    console.log(otroObjeto);
    console.log("");


    // REST y SPREAD

        // Rest
        function notaMedia(...notas) {
            let total = notas.reduce((total,nota) => total += nota);
            return total/notas.length;
        }

        console.log(notaMedia(3.6, 6.8)); 
        console.log(notaMedia(5.2, 3.9, 6, 9.75, 7.5, 3)); 

        console.log("");

        // Spread
        let array = [1,2,3];
        console.log(array);
        console.log(...array);

        console.log(" ");

    
    // DESESTRUCTURACIÓN DE ARRAYS
    let arrayNotas4 = [5.2, 3.9, 6, 9.75, 7.5, 3]
    let [primera, segunda, tercera] = arrayNotas4 // primera = 5.2, segunda = 3.9, tercera = 6
    // let [primera, , , cuarta] = arrayNotas // primera = 5.2, cuarta = 9.75
    // let [primera, ...resto] = arrayNotas // primera = 5.2, resto = [3.9, 6, 9.75, 3]


    const miProducto = {
        id: 5,
        name: 'TV Samsung',
        units: 3,
        price: 395.95
    };

    // Se puede abreviar: function muestraNombre({name, units}) {
        
    function muestraNombre({name: name, units: units}) { 
        console.log('Del producto ' + name + ' hay ' + units + ' unidades')
    }

    muestraNombre(miProducto); //Del producto TV Samsung hay 3 unidades


    let ganadores = ['Márquez', 'Rossi', 'Márquez', 'Lorenzo', 'Rossi', 'Márquez', 'Márquez'];
    let ganadoresNoDuplicados = new Set(ganadores); // {'Márquez, 'Rossi', 'Lorenzo'}
    
    // o si lo queremos en un array:
    ganadoresNoDuplicados = Array.from(new Set(ganadores)); // ['Márquez, 'Rossi', 'Lorenzo']