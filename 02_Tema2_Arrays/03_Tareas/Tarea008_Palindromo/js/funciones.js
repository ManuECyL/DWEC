function esPalindroma(cadena) { 
   
    let nuevaCadena = cadena.replace(/[\W_]/g,"").toLowerCase();

    let arrayReverse = nuevaCadena.split("").reverse().join("");

    if (nuevaCadena === arrayReverse) {
        return true + " -> Es palíndroma";
    
    } else {
        return false + " -> No es palíndroma";
    }
}

console.log(esPalindroma("somos"));
console.log(esPalindroma("Palabra"));
console.log(esPalindroma("Dabale arroz a la zorra el abad"));



