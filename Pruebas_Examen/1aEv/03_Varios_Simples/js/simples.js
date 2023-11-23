// Valor POR DEFECTO a los parámetros por si no los pasan asignándoles el valor al definirlos:
    function potencia(base, exponente=2) {
        
        console.log(base); // muestra 4
        console.log(exponente); // muestra 2 la primera vez y 5 la segunda

        let valor=1;

        for (let i=1; i<=exponente; i++) {
            valor=valor*base;
        }

        return valor;
    }

    console.log(potencia(4)); // mostrará 16 (4^2)
    console.log(potencia(4,5)); // mostrará 1024 (4^5)