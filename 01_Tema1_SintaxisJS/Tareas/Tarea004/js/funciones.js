console.log('App para área y perímetro de un polígono');

// Si el Radio es menor o igual que 0 error
// Función para cada uno de las partes
// Usar constante PI
// Poligono Regular de error cuando tenga menos de 3 lados

const PI = Math.PI;
let area = 0;
let perimetro = 0;

function areaCirculo() {

    let radio = parseFloat(prompt("Introduzca el radio de la circunferencia para calcular el area: "));

    if (radio <= 0) {
        throw "El radio no puede ser 0 o menor";
   
    } else {
        area = PI * (Math.pow(radio, 2));

        return area.toFixed(2);   
    }
}

try {
    window.alert(areaCirculo());

} catch (error) {

    window.alert(error);
}

function perimetroCircunferencia() {

    let radio = parseFloat(prompt("Introduzca el radio de la circunferencia para calcular el perimetro: "));

    if (radio <= 0) {
        throw "El radio no puede ser 0 o menor";
    
    } else {
        perimetro = 2 * PI * radio;

        return perimetro.toFixed(2);
    }
}

try {
    window.alert(perimetroCircunferencia());

} catch (error) {

    window.alert(error);
}


function areaPoligonoRegular() {

    let poligono = parseFloat(prompt("Introduzca el número de lados del polígono: "));

    if (poligono < 3) {
        throw "El poligono regular no puede tener menos de 3 lados";
    }

    let lado = parseFloat(prompt("Introduzca la longitud el lado: "));

    if (lado < 0) {
        throw "La longitud del lado no puede ser 0 o menor";
    
    } else {
        perimetro = poligono * lado;

        let angulo = 360 / poligono;
        
        let apotema = ((lado / 2) / angulo);
    
        area = (perimetro * (apotema / 2));
    }    
}

try {
    window.alert(areaPoligonoRegular());

} catch (error) {

    window.alert(error);
}