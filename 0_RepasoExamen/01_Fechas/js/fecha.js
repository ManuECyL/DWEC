document.getElementById("btnCalcular").addEventListener('click', (event) => {

    event.preventDefault();

    let fechaHoy = new Date();
    let fechaNacimiento = new Date(document.getElementById("fechaN").value);

    let fechaHoyMS = fechaHoy.getTime();
    let fechaNacimientoMS = fechaNacimiento.getTime();

    let milisegundos = fechaHoyMS - fechaNacimientoMS;

    let dias = Math.trunc((((milisegundos / 1000)/60)/60)/24);
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Tienes " + dias + " dias de vida" ;

    let diasHasta = new Date();
        diasHasta.setTime(10000);

    let restaDias = diasHasta - dias;

    let años = Math.trunc(restaDias / 365);

    let resultado2 = document.getElementById("resultado2");
    resultado2.innerHTML = "Te faltan " + restaDias + " dias hasta llegar a los 10.000 dias, es decir " + años + " año";

})





