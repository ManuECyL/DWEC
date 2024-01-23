const express = require('express');
const cors = require('cors');
const ciudades = express();
const puerto = 3000;

ciudades.use(cors);

// Importamos la constante routes con la colección de ciudades
const rutasCiudades = require('./rutas/rutas_ciudades');

// Necesario para parsear el cuerpo de las peticiones a json y que no de error
ciudades.use(express.json());

// Necesario para realizar la consulta get sobre la tabla ciudades
ciudades.use('/ciudades', rutasCiudades);

// Comprobar por que puerto está escuchando nuestro servidor
ciudades.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});