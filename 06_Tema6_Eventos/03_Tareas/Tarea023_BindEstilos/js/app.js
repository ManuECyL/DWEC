let text1 = document.getElementById("color1");
let text2 = document.getElementById("color2");

document.getElementById("btnCambiar").addEventListener('click', cambiarColor.bind('', text1, text2));


function cambiarColor(t1, t2) {
    
    t1.style.backgroundColor = generarColorAleatorio();
    t2.style.backgroundColor = generarColorAleatorio();
}


function generarColorAleatorio() {
    // Genera un componente hexadecimal aleatorio (0-255) y conviértelo a formato hexadecimal
    const componente = () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    
    // Concatena tres componentes para formar un color hexadecimal completo
    const colorHex = `#${componente()}${componente()}${componente()}`;
    
    return colorHex;
}
