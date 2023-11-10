// TIPOS DE DATOS
console.log("probando que funciona...");

// Mostrar el tipo de dato usando typeOf()
console.log(typeof(3));
console.log(typeof("3"));

let x;
console.log(x);
console.log(typeof(null));
console.log("Hola" * 2);
console.log("3" * 2);
console.log("3" + 2);
console.log(3 + 2);

let y = "3";
console.log(y + 2);

// Para convertir una cadena a número usar Number()
console.log(Number(y) + 2);
console.log((-2 / 0));
console.log(typeof(-2 / 0));
console.log(typeof(Infinity));

// Para redondear usar el método .toFixed()
console.log(1.23456.toFixed());
console.log(1.23456.toFixed(3)); // Redondea a partir del 3er decimal -> 1.235

//Fecha de hoy
let hoy = new Date();
console.log(hoy);

// Para dar formato a la fecha (d/m/y h:m:s) se utiliza .toLocaleString()
console.log(hoy.toLocaleString());

// Para transformar un número a cadena también se puede utilizar .toLocaleString()
let num = 888;
console.log(num);

console.log(num.toLocaleString());

// Además, .toLocaleString() redondea a 3 decimales
let dec = 888.8888;
console.log(dec);
console.log(dec.toLocaleString());