let arrayTd = Array.from(document.getElementsByTagName("td"));

let arrayImagenes = new Array ();
    arrayImagenes [0] = ['../imagenes/Img_1.png'];
    arrayImagenes [1] = ['../imagenes/Img_2.png'];
    arrayImagenes [2] = ['../imagenes/Img_3.png'];
    arrayImagenes [3] = ['../imagenes/Img_4.png'];
    arrayImagenes [4] = ['../imagenes/Img_5.png'];
    arrayImagenes [5] = ['../imagenes/Img_6.png'];


arrayTd.forEach(td => insertarImagen);


function insertarImagen() {
    
    arrayImagenes.forEach(imagen => {
        arrayTd.push(imagen);
    });
}