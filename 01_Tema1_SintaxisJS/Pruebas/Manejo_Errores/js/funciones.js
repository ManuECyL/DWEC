// Prueba try catch
    try {
        console.log(Pepe);
        
    } catch (error) {
        // console.log("Introduzca un nombre válido");
        console.error(error.message);

    } finally {
        console.log("Benito");
    }

    console.log("Juan");
    console.log("\n");


//-------------------------------------------------------------------------------------------------------------


// Ejemplo sin Throw
    // function retirar(saldo, cantidad) {
        
    //     if (saldo < cantidad) {
    //         return false;
    //     }

    //     return saldo - cantidad;
    // }

    // let saldo = 3000;
    // let cantidad = 200;

    // let resultado = retirar(saldo, cantidad);
    // console.log(resultado);

    // if (resultado === false) {
    //     console.log("Saldo Insuficiente");

    // } else {
    //     saldo = resultado;
    // }


// Ejemplo con Throw
    function retirar(saldo, cantidad) {
        
        if (saldo < cantidad) {
            throw "Saldo Insuficiente";
        }

        return saldo - cantidad;
    }

    // let saldo = 3000;
    let saldo = 30;
    let cantidad = 200;

    try {
        saldo = retirar(saldo, cantidad);
        console.log("Nuevo Saldo: " + saldo);

    } catch (error) {
        console.error(error);
    }

    console.log("\n");


//-------------------------------------------------------------------------------------------------------------


// Arrays con Try Catch

    function calcularMedia(notas) {

        let suma = 0;

        if (notas.length < 1) {
            throw "No existe ninguna nota";
        
        } else {
            // for (let i = 0; i < notas.length; i++) {
            //     suma += notas[i];
            // }

            // Valor de la nota del array notas
            for (const nota of notas) {
                suma += nota;

                if (isNaN(nota)) {
                    throw "El valor no es numérico";
                }
            }

            return media = suma/notas.length;; 
        }
    }
    
    // Es conveniente hacer varios try catch, porque si está todo en el mismo y la primera ejecución no se cumple, el resto no se ejecutan.
    try {
        console.log(calcularMedia([]));

    } catch (error) {
        console.error(error);
    }

    try {
        console.log(calcularMedia([6,8,9,2]));

    } catch (error) {
        console.error(error);
    }

    try {
        console.log(calcularMedia([6,8,'J',3]));

    } catch (error) {
        console.error(error);
    }
