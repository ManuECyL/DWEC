function numeroAleatorio(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let apostado = document.getElementById("apostado");
let restante = document.getElementById("restante");

let dineroRestante = 50;
restante.innerHTML = "Restante: " + dineroRestante + "€";

function configurar() {

    const divJuego = document.getElementById('juego');
        // Ocultar la página de juego
        divJuego.classList.add('hidden');

    const divConfigurar = document.getElementById('divConfigurar');
    const dineroRestanteInput = document.getElementById('dineroRestante');
    const valorInicialInput = document.getElementById('valorInicial');
    const sonidoCheckbox = document.getElementById('sonido');
    const colorFondoInput = document.getElementById('colorFondo');
    const iniciarJuegoButton = document.getElementById('iniciarJuego');
    const juegoDiv = document.getElementById('juego');

    // Mostrar la página de configuración
    divConfigurar.classList.remove('hidden');

    // Configuración de los valores actuales
    dineroRestanteInput.value = dineroRestante;
    valorInicialInput.value = valorInicial;
    sonidoCheckbox.checked = sonidoCheckbox;
    colorFondoInput.value = juegoDiv.style.backgroundColor;

    // Manejar clic en el botón de aplicar configuración
    iniciarJuegoButton.addEventListener('click', function() {
        // Aplicar la configuración según los valores de los campos
        dineroRestante = parseInt(dineroRestanteInput.value) || 0;
        valorInicial = parseInt(valorInicialInput.value) || 0;
        apuesta.value = parseInt(valorInicialInput.value) || 0;
        sonidoActivado = sonidoCheckbox.checked;
        juegoDiv.style.backgroundColor = colorFondoInput.value;
        divConfigurar.style.backgroundColor = colorFondoInput.value;

        // Restablecer el juego
        restante.innerHTML = "Restante: " + dineroRestante + "€";
        resultado.innerHTML = "";
        mensaje.innerHTML = "";
        apostado.innerHTML = "Apostado: 0€";

        // Ocultar la página de configuración
        divConfigurar.classList.add('hidden');
        divJuego.classList.remove('hidden');
    });     
}


function apostar() {

    let apuesta = parseInt(document.getElementById("apuesta").value);

    if (apuesta > dineroRestante) {
        alert("No puede apostar más de lo que tiene");

    } else if (isNaN(apuesta)) {
        alert("Debe apostar algo");

    } else {

        apostado.innerHTML = "Apostado: " + apuesta + "€";
        
        let resultado = document.getElementById("resultado");
        let dado1 = numeroAleatorio(1, 6);
        let dado2 = numeroAleatorio(1, 6);
            resultado.innerHTML = dado1 + " " + dado2;
        
        let mensaje = document.getElementById("mensaje");

        let sumaDados = dado1 + dado2;

        switch (sumaDados) {
            
            case 7:
                mensaje.style.backgroundColor = "green";
                mensaje.innerHTML = "7: Has ganado " + apuesta + "€";
                dineroRestante += apuesta;
                break;
        
            case 11:
                mensaje.style.backgroundColor = "green";
                mensaje.innerHTML = "11: Has ganado " + apuesta + "€";
                dineroRestante += apuesta;
                break;

            case 2:
                mensaje.style.backgroundColor = "red";
                mensaje.innerHTML = "2: Has perdido " + apuesta * 2 + "€";
                dineroRestante -= apuesta * 2;           
                
                if (dineroRestante == 0 || dineroRestante < 0) {
                    mensaje.innerHTML += "<br> HAS PERDIDO";
                }

                break;
            
            case 3:
                mensaje.style.backgroundColor = "red";
                mensaje.innerHTML = "3: Has perdido " + apuesta * 2 + "€";
                dineroRestante -= apuesta * 2;    
                
                if (dineroRestante == 0 || dineroRestante < 0) {
                    mensaje.innerHTML += "<br> HAS PERDIDO";
                }

                break;

            case 12:
                mensaje.style.backgroundColor = "red";
                mensaje.innerHTML = "12: Has perdido " + apuesta * 2 + "€";
                dineroRestante -= apuesta * 2;
                
                if (dineroRestante == 0 || dineroRestante < 0) {
                    mensaje.innerHTML += "<br> HAS PERDIDO";
                }

                break;
                
            default:
                mensaje.style.backgroundColor = null;
                mensaje.innerHTML = sumaDados + ": Vuelve a lanzar";
                break;
        }

        restante.innerHTML = "Restante: " + dineroRestante + "€";
    }
}


