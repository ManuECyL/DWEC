function doble(num) {
    return 2 * num;
}


function triple(num) {
    return 3 * num;
}


function numeroAleatorio(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


export const funcionesMatematicas = {
    doble,
    triple,
    numeroAleatorio
}