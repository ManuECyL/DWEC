function probar1(evento){
    console.log(this); //elemento prueba
    console.log(this.innerText); // texto de prueba
    console.log(evento); //punero a evento
    console.log(evento.target); //elemento prueba
    console.log(evento.currentTarget); // elemento prueba
}

function probar2(evento){
    console.log(this); // objeto Window
    console.log(evento); // puntero a evento
    console.log(evento.target); //elemento prueba
    console.log(evento.currentTarget); //elemento prueba
}

function probar3(var1, var2, var3, evento){
    // Hay que pasarle en la llamada 4 argumentos para que no haya error
    console.log(this); // objeto Window
    console.log(evento); // puntero a evento
    console.log(evento.target); //elemento prueba
    console.log(evento.currentTarget); //elemento prueba
    console.log(var1); // 4
    console.log(var2); // pepe
    console.log(var3); // 7
}

function probar4(var1, evento){
    console.log(var1); // puntero a evento
    console.log(this); // "argumento"
    console.log(evento); // undefined
    console.log(evento.target); //error
    console.log(evento.currentTarget); // error
}

// id=”prueba” es un elemento H1, h2, P, o similar.
document.getElementById("prueba").addEventListener('click', probar1);
document.getElementById("prueba").addEventListener('click', probar2.bind(this));
document.getElementById("prueba").addEventListener('click', probar3.bind(this, 4, "pepe",7));
document.getElementById("prueba").addEventListener('click', probar4.bind("argumento"));