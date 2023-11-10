console.log("Prototipo");
 
Number.prototype.double = function () {
    return this + this;
}
 
let numero = 3;
console.log(numero.double());
 
//---------------------------
 
String.prototype.nombrePropio = function() {
    return this.charAt(0).toUpperCase() + this.substring(1, this.length).toLowerCase();
}
 
let nombre = "mAnu";
console.log(nombre.nombrePropio());