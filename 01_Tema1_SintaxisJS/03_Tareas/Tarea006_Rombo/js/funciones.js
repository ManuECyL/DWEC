function mostrarRombo() {

    let divRombo = document.getElementById("divRombo");
    let rombo = parseInt(document.getElementById("rombo").value);

    divRombo.innerHTML = "";

    for (let i = 1; i <= (rombo / 2); i++) {

        for (let espacio = 1; espacio <= (rombo - i); espacio++) {
            divRombo.innerHTML += "&nbsp;";
            divRombo.innerHTML += "&nbsp;";
        }

        for (let asteriscos = 1; asteriscos <= (i * 2) - 1; asteriscos++) {
            
            if (asteriscos == 1 || asteriscos == (i * 2) - 1) {
                divRombo.innerHTML += "*";
            
            } else {
                divRombo.innerHTML += "&nbsp;";
                divRombo.innerHTML += "&nbsp;";
            }
        }

        divRombo.innerHTML += "<br></br>";
    }

    // Si el número de filas es IMPAR
    if (rombo % 2 != 0) {
        
        for (let i = (rombo / 2) + 0.5; i >= 1; i--) {
    
            for (let espacio = 1; espacio <= rombo - i; espacio++) {
                divRombo.innerHTML += "&nbsp;";
                divRombo.innerHTML += "&nbsp;";
            }
    
            for (let asteriscos = 1; asteriscos <= ((i * 2) - 1); asteriscos++) {
                
                if (asteriscos == 1 || asteriscos == ((i * 2) - 1)) {
                    divRombo.innerHTML += "*";
                
                } else {
                    divRombo.innerHTML += "&nbsp;";
                    divRombo.innerHTML += "&nbsp;";
                }   
            }
    
            divRombo.innerHTML += "<br></br>";
        }
    
    // Si el número de filas es PAR
    } else {
    
        for(let i = (rombo / 2); i >= 1; i--){
    
            for(let espacio = 1; espacio <= (rombo - i); espacio++){
                divRombo.innerHTML += "&nbsp;";
                divRombo.innerHTML += "&nbsp;";
            }
    
            for(let asteriscos = 1; asteriscos <= ((i * 2) - 1); asteriscos++){
    
                if(asteriscos == 1 || asteriscos == ((i * 2) - 1)){
                    divRombo.innerHTML += "*";
    
                } else {
                    divRombo.innerHTML += "&nbsp;";
                    divRombo.innerHTML += "&nbsp;";
                }
            }        
    
            divRombo.innerHTML += "<br></br>";
        }
    }
}

function limpiar() {
    document.getElementById("rombo").value = "";
    divRombo.innerHTML = "";
}


// function dibujarRombo() {
//     const filas = document.getElementById("input_filas").value;
//     const cuadro = document.getElementById("c2");
//     cuadro.innerHTML = "";
  
//     let espacios = (filas / 2 - 1).toFixed(0);
//     let astericos = 1;
  
//     for (let i = 0; i < filas; i++) {
//       for (let ie = 0; ie < espacios; ie++) {
//         cuadro.innerHTML += "&nbsp";
//       }
  
//       for (let ia = 0; ia < astericos; ia++) {
//         if (ia == 0 || ia == astericos - 1) {
//           cuadro.innerHTML += "*";
//         } else {
//           cuadro.innerHTML += "&nbsp";
//         }
//       }
//       if (i + 1 < filas / 2) {
//         espacios--;
//         astericos += 2;
//       } else {
//         if (i + 1 != filas / 2) {
//           espacios++;
//           astericos -= 2;
//         }
//       }
  
//       cuadro.innerHTML += "<br>";
//     }
//   }
  