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

// Función para obtener los datos de una ciudad según el id indicado
const getCiudadesById = (req, res) => {

    const idRegistro = req.params.id;

    // Consulta a la base de datos
    db.query('SELECT * FROM ciudades WHERE id = ?', [idRegistro], (err, resultados) => { // http://localhost:3000/ciudades/3

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

// Función para obtener los datos de una ciudad según el los valores minimo y maximo
const getCiudadByHabitantes = (req, res) => {

    console.log(" - SELECT por habitantes");

    const minHabitantes = req.params.min;
    const maxHabitantes = req.params.max;

    // console.log(minHabitantes, maxHabitantes);

    db.query('SELECT * FROM ciudades WHERE cantidad > ? AND cantidad < ?', [minHabitantes,maxHabitantes], (err, resultado) => {

        if (err) {
            console.error('Error al obtener datos desde la base de datos', err);
            res.status(500).json({ error: 'Error interno del servidor' });

        } else {            

            if (resultado.length > 0) {
                res.json(resultado);

            } else {
                res.status(404).json({ error: 'Registro no encontrado' })
            }
        }
    });
};

/*const getCiudadesByHabitantesSanti = (req, res) => {
    try {
      // Obtén los valores mínimos y máximos del rango desde los parámetros de consulta
      const minHabitantes = parseInt(req.params.min, 10) || 0; // Valor mínimo, por defecto 0
      const maxHabitantes = parseInt(req.params.max, 10) || Number.MAX_SAFE_INTEGER; // Valor máximo, por defecto infinito
 
      console.log(minHabitantes);
      console.log(maxHabitantes);
 
      // Ejecuta la consulta SQL para obtener ciudades en el rango especificado
      db.query('SELECT * FROM ciudades WHERE cantidad BETWEEN ? AND ?', [minHabitantes, maxHabitantes], (err, resultados) => {
        if (err) {
          console.error("Error en la consulta:", err);
          res.status(500).json({ error: 'Error interno del Servidor' });
        } else {
          // Verificamos si se encontró algo
          if (resultados.length > 0) {
            res.json({ ciudades: resultados });
          } else {
            res.status(404).json({ error: `No se encontraron ciudades con esos requisitos` });
          }
        }
      });
    } catch (error) {
      console.error('Error en el controlador:', error);
      res.status(500).json({ error: 'Error interno del Servidor' });
    }
};
*/

// Función para modificar los datos de una ciudad según el id indicado
const putCiudades = (req, res) => {

    const idRegistro = req.params.id;
    const {nuevoNombre, habitantes} = req.body;
    const sql = 'UPDATE ciudades SET nombre = ?, cantidad = ? WHERE id = ?';

    db.query(sql, [nuevoNombre, habitantes, idRegistro], (err, resultados) => { // http://localhost:3000/ciudades/put/3

        if (err) {
            console.error('Error al insertar datos en la base de datos: ', err);
            res.status(500).json({error: 'Error interno del servidor'})

        } else if (resultados.affectedRows == 0) {
            res.status(404).json({error: 'No se encontró ninguna ciudad con el ID proporcionado'});
    
        } else {
            // res.json({recibido: true, nuevoNombre, habitantes, id:resultados.idRegistro});
            res.json({recibido: true, nuevoNombre, habitantes, id: idRegistro});
        }

    });
}

// Función para modificar de otra forma los datos de una ciudad según el id indicado
const patchCiudades = (req, res) => {

    const idRegistro = req.params.id;
    const {nuevoNombre, habitantes} = req.body;
    const sql = 'UPDATE ciudades SET nombre = ?, cantidad = ? WHERE id = ?';

    db.query(sql, [nuevoNombre, habitantes, idRegistro], (err, resultados) => { // http://localhost:3000/ciudades/patch/3

        if (err) {
            console.error('Error al insertar datos en la base de datos: ', err);
            res.status(500).json({error: 'Error interno del servidor'})

        } else if (resultados.affectedRows == 0) {
            res.status(404).json({error: 'No se encontró ninguna ciudad con el ID proporcionado'});
    
        } else {
            // res.json({recibido: true, nuevoNombre, habitantes, id:resultados.idRegistro});
            res.json({recibido: true, nuevoNombre, habitantes, id: idRegistro});
        }

    });
}

// Función para actualizar de forma natural los datos de una ciudad según el id indicado
const actualizarCiudades = (req, res) => {

    const idRegistro = req.params.id;
    const {nuevoNombre, habitantes} = req.body;
    
    // Array donde van a ir los nombres de los campos que se van a actualizar
    const updatedFields = [];

    // Array donde van a ir los valores de los campos que se van a actualizar
    const updatedValues = [];

    // Si nuevoNombre no es undefined, añadir el campo y valor a los arrays
    if (nuevoNombre != undefined) {
        updatedFields.push('nombre=?');
        updatedValues.push(nuevoNombre);
    }

    // Si habitantes no es undefined, añadir el campo y valor a los arrays
    if (nuevoNombre != undefined) {
        updatedFields.push('cantidad=?');
        updatedValues.push(habitantes);
    }

    const sql = `UPDATE ciudades SET ${updatedFields.join(', ')} WHERE id = ?`;
    const queryValues = [...updatedValues, idRegistro];

    db.query(sql, queryValues, (err, resultados) => { // http://localhost:3000/ciudades/3

        if (err) {
            console.error('Error al insertar datos en la base de datos: ', err);
            res.status(500).json({error: 'Error interno del servidor'})
    
        } else {
            res.json({recibido: true, nuevoNombre, habitantes, id:resultados.idRegistro});
        }

    });
}


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
    postCiudades,
    getCiudadesById,
    getCiudadByHabitantes,
    putCiudades,
    patchCiudades,
    actualizarCiudades,
    borrarCiudades
};