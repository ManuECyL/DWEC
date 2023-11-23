function actualizarCirculo() {

    let ventanaAncho = window.innerWidth;
    let diametro = ventanaAncho / 5; // La quinta parte del ancho de la ventana

    // Elimina el círculo existente (si hay alguno)
    let circleExistente = document.getElementById('circle');

    if (circleExistente) {
      circleExistente.parentNode.removeChild(circleExistente);
    }

    // Crea un nuevo div para el círculo
    let circle = document.createElement('div');
        circle.id = 'circle';
        circle.style.width = diametro + 'px';
        circle.style.height = diametro + 'px';
        circle.style.borderRadius = '50%';
        circle.style.border = "2px solid";
        circle.style.position = 'absolute';
        circle.style.top = '50%';
        circle.style.left = '50%';
        circle.style.transform = 'translate(-50%, -50%)';

    // Agrega el círculo al cuerpo del documento
    document.body.appendChild(circle);
  }

  // Llama a la función al cargar la página y al redimensionar la ventana
  window.onload = actualizarCirculo;
  window.onresize = actualizarCirculo;