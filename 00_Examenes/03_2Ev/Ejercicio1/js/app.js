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

    num = (calcular('multiplicacion', num, 2)); 

    return num;
}

console.log(duplicar(3));
console.log(duplicar(5));