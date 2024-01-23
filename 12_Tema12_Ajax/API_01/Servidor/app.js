// Importamos Libreria de express: npm -i express
const express = require('express');

// Instancia de express que va a tener el servidor
const app = express();

// Importamos Libreria de mysql: npm -i mysql
const mysql = require('mysql');

// Puerto en el que vamos a trabajar. El 3000 es uno habitual
const puerto = 3000;

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: '0.0.0.0',
    port: 3307, // Modificamos el puerto con el vamos a trabajar (3306 o 3307)
    user: 'manu',
    password: 'manu',
    database: 'ejemplodbmanu'
});

// Conexión a la base de datos
db.connect((err) => {
    
    // Si hay un error muestra cual es
    if (err) {
        console.error('Error de conexión a la base de datos: ', err);
    
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
})

// Necesario para parsear el cuerpo de las peticiones a json y que no de error
app.use(express.json());

// Petición GET
app.get('/', (req, res) => {
    // Enviar una respuesta
    res.send('Hola, estás en mi API');
});


app.get('/api/datos', (req, res) => {

    const datos = {
        mensaje: 'Esto son datos', 
        nombre: 'Pepito',
        edad: 26
    }

    // Enviar respuesta en formato json
    res.json(datos);
});


// Petición POST
app.post('/api/enviar', (req, res) => {

    // Insertamos el mensaje en el body
    const {mensaje} = req.body;

    res.json({recibido: true, mensaje});
});


// Comprobar por que puerto está escuchando nuestro servidor
app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});