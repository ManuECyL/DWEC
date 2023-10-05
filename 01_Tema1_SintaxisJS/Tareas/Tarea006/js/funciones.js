let divRombo = document.getElementById("divRombo");


function mostrarRombo() {
    let rombo = parseInt(document.getElementById("rombo").value);

    divRombo.innerHTML = "";

    for (let i = 1; i <= (rombo / 2); i++) {

        for (let espacio = 1; espacio <= (rombo - i); espacio++) {
            divRombo.innerHTML += "&nsbp;";
            divRombo.innerHTML += "&nsbp;";
        }

        for (let asteriscos = 1; asteriscos <= (i * 2); asteriscos++) {
            
            if (asteriscos == 1 || asteriscos == (i * 2) - 1) {
                divRombo.innerHTML += "*";
            
            } else {
                divRombo.innerHTML += "&nsbp;";
                divRombo.innerHTML += "&nsbp;";
            }
        }

        divRombo.innerHTML += "<br></br>";
    }
}

// Si el número de filas es IMPAR
if (rombo % 2 != 0) {
    
    for (let i = (rombo / 2) + 0.5; i >= i; i--) {

        for (let espacio = 1; espacio <= array.length; espacio++) {
            const element = array[espacio];
            
        }
    }
}


function limpiar() {
    document.getElementById("rombo").value = "";
    divRombo.innerHTML = "";
}


  // Si el número de filas es IMPAR
//   if (filas % 2 != 0){

//     for(let i = filas/2 + 0.5; i >= 1; i--){

//         for(let blanco = 1; blanco <= filas - i; blanco++){
//             mostrar.innerHTML += '&nbsp;';
//             mostrar.innerHTML += '&nbsp;';
//         }

//         for(let astericos = 1; astericos <= (i*2)-1; astericos++){

//             if(astericos == 1 || astericos == (i*2)-1){
//                 mostrar.innerHTML += "*";

//             } else {
//                 mostrar.innerHTML += '&nbsp;';
//                 mostrar.innerHTML += '&nbsp;';
//             }
//         }

//         mostrar.innerHTML += "<br></br>";
//     }

// // Si el número de filas es PAR
// } else {

//     for(let i = filas/2; i >= 1; i--){

//         for(let blanco = 1; blanco <= filas - i; blanco++){
//             mostrar.innerHTML += '&nbsp;';
//             mostrar.innerHTML += '&nbsp;';
//         }

//         for(let astericos = 1; astericos <= (i*2)-1; astericos++){

//             if(astericos == 1 || astericos == (i*2)-1){
//                 mostrar.innerHTML += "*";

//             } else {
//                 mostrar.innerHTML += '&nbsp;';
//                 mostrar.innerHTML += '&nbsp;';
//             }
//         }        

//         mostrar.innerHTML += "<br></br>";
//     }
// }