let arrayTd = Array.from(document.getElementsByTagName("td"));

let arrayImagenes = [
    './imagenes/Img_1.png',
    './imagenes/Img_2.png',
    './imagenes/Img_3.png',
    './imagenes/Img_4.png',
    './imagenes/Img_5.png',
    './imagenes/Img_6.png'
];

arrayTd.forEach((td, index) => insertarImagen(td, index));

function insertarImagen(td, index) {

    let img = document.createElement('img');
        img.setAttribute('src', arrayImagenes[index])
        
    td.appendChild(img);
}