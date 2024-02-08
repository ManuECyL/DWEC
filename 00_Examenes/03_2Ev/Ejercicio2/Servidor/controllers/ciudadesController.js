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


// Función para obtener los datos de una ciudad según el id indicado
// const getCiudadesById = (req, res) => {

//     const idRegistro = req.params.id;

//     // Consulta a la base de datos
//     db.query('SELECT * FROM ciudades WHERE id = ?', [idRegistro], (err, resultados) => { // http://localhost:3000/ciudades/3

//         if (err) {
//             console.error('Error de conexión a la base de datos: ', err);
//             res.status(500).json({error: 'Error interno del servidor'})
    
//         } else {

//             // Verifica si se encontró un registro
//             if (resultados.length > 0) {
//                 // Devuelve el primer resultado encontrado (debería ser único)
//                 res.json(resultados[0]);

//             } else {
//                 res.status(400).json({error: 'Registro no encontrado'});
//             }
//         }

//     });
// };


// Función para obtener los datos de una ciudad según el nombre indicado
const getCiudadesByName = (req, res) => {

    const nombreRegistro = req.params.nombre;

    const sql = `SELECT * FROM ciudades WHERE UPPER(nombre) LIKE CONCAT(UPPER(?),'%'`;

    // Consulta a la base de datos
    db.query("SELECT * FROM ciudades WHERE nombre LIKE ?", [nombreRegistro], (err, resultados) => { // http://localhost:3000/ciudades/3

        if (err) {
            console.error('Error de conexión a la base de datos: ', err);
            res.status(500).json({error: 'Error interno del servidor'})
    
        } else {

            // Verifica si se encontró un registro
            if (resultados.length > 0) {
                // Devuelve el primer resultado encontrado (debería ser único)
                res.json(resultados[0]);

            } else {
                res.status(400).json({error: 'Registro no encontrado'});
            }
        }

    });
};


// Función para actualizar de forma natural los datos de una ciudad según el id indicado
const borrarCiudades = (req, res) => {

    const sql = `DELETE FROM ciudades WHERE id = ?`;
    const idRegistro = req.params.id;

    // Consulta a la base de datos
    db.query(sql, [idRegistro], (err, resultados) => { // http://localhost:3000/ciudades/3

        if (err) {
            console.error('Error de conexión a la base de datos: ', err);
            res.status(500).json({error: 'Error interno del servidor'})
    
        } else {

            // Verifica si se encontró un registro
            if (resultados.affectedRows > 0) {
                // Devuelve el primer resultado encontrado (debería ser único)
                res.json({mensaje: `Registro con id: ${idRegistro} se eliminó correctamente`});

            } else {
                res.status(400).json({error : 'Registro no encontrado'});
            }
        }

    });
}

// Exportaciones que vamos a realizar
module.exports = {
    getCiudades,
    // getCiudadesById,
    getCiudadesByName,
    borrarCiudades
};