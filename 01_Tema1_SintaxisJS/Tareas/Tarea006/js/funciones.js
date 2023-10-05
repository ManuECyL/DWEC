
function mostrarRombo() {
    let tamañoRombo = document.getElementById("rombo").value;

    document.getElementById("divRombo").innerHTML = "";

    for (let i = 0; i < tamañoRombo; i++) {

        for (let j = 0; j < i; j++) {
            document.getElementById("divRombo").innerHTML = "*";
        }
    }
}