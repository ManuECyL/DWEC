// Haz una función que ordene las notas de un array pasado como parámetro. Si le pasamos [4,8,3,10,5] 
    // debe devolver [3,4,5,8,10]. Pruébalo en la consola

let notas = [4, 8, 3, 10, 5];

function ordenarNotas(notas) {
    
    notas.sort(function(n1, n2) {
        
        let resta = n1 - n2;
        
        return resta;
    });
};

ordenarNotas(notas);
console.log(notas);