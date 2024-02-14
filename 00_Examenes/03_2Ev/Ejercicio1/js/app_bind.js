// function calcular(operacion, x, y) { 
//     switch (operacion) { 
//       case 'suma': 
//         return x + y; 
//       case 'resta': 
//         return x - y; 
//       case 'multiplicacion': 
//         return x * y; 
//       case 'division': 
//         return x / y; 
//       default: 
//         return NaN; 
//     } 
// }


// function duplicar(num) {

//     num = calcular.bind(null,'multiplicacion', num, 2); 

//     return num();
// }

// console.log(duplicar(3));
// console.log(duplicar(5));


function calcular(operacion, x, y) { 
  switch (operacion) { 
    case 'suma': 
      return x + y; 
    case 'resta': 
      return x - y; 
    case 'multiplicacion': 
      return x * y; 
    case 'division': 
      return x / y; 
    default: 
      return NaN; 
  } 
}


function duplicar(num) {

  num = calcular('multiplicacion', num, 2); 

  return num;
}


function bindDuplicar(valor) {

  const num = duplicar.bind(null, valor);

  return num();
}

console.log(bindDuplicar(3));
console.log(bindDuplicar(5));