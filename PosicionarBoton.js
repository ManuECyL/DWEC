document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.minHeight = "100vh";

let divBoton = document.createElement('divBolas');

  divBoton.style.position = "relative";
  divBoton.style.marginTop = "auto";
  divBoton.style.textAlign = "center";
  divBoton.style.padding = "10px";
  
  document.body.appendChild(divBoton);

let boton = document.createElement('button');
    boton.innerHTML = "Booola";
    boton.style.display = "flex";
    boton.style.margin = "auto";
    boton.style.position = "absolute";
    boton.style.bottom = "20px;"
  divBoton.appendChild(boton);