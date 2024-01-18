// Importamos el contenido exportado del fichero db.js, pero en este caso no necesita .js
const db = require('../databases/db');

// Función para obtener los datos de la tabla ciudades
const getCiudades = (req, res) => {

    // Consulta a la base de datos
    db.query('SELECT * FROM ciudades', (err, resultados) => { // http://localhost:3000/ciudades

        if (err) {
            console.error('Error de conexión a la base de datos: ', err);
            res.status(500).json({error: 'Error interno del servidor'})
    
        } else {
            res.json(resultados);
        }

    });
};


// Función para añadir ciudades a la tabla ciudades
const postCiudades = (req, res) => {

    // Se deben poner los mismos nombres en el body al realizar la petición POST con ThunderClient
    const {nuevoNombre, habitantes} = req.body;

    // Consulta a la base de datos
    db.query('INSERT INTO ciudades (nombre, cantidad) VALUES (?, ?)', [nuevoNombre, habitantes], (err, resultados) => { // http://localhost:3000/ciudades

        if (err) {
            console.error('Error al insertar datos en la base de datos: ', err);
            res.status(500).json({error: 'Error interno del servidor'})
    
        } else {
            res.json({recibido: true, nuevoNombre, habitantes, id: resultados.insertId});
        }

    });
};

// Exportaciones que vamos a realizar
module.exports = {
    getCiudades,
    postCiudades
};