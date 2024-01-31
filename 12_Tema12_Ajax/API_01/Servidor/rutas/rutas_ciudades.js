// Importamos la libreria express
const express = require('express');

// rutasCiudades va a ser una colección de rutas
const rutasCiudades = express.Router();

// Importamos el contenido de ciudadesController para poder hacer la consulta con get
const ciudadesController = require('../controllers/ciudadesController');

// GET de rutasCiudades
rutasCiudades.get('/', ciudadesController.getCiudades);

// POST de rutasCiudades
rutasCiudades.post('/add', ciudadesController.postCiudades);

// GET de rutasCiudades por Id
rutasCiudades.get('/:id', ciudadesController.getCiudadesById);

// GET de rutasCiudades entre dos valores minimo y maximo
rutasCiudades.get('/:min/:max', ciudadesController.getCiudadByHabitantes);

// PUT de rutasCiudades por Id (Modificar)
rutasCiudades.put('/put/:id', ciudadesController.putCiudades);

// PATCH de rutasCiudades por Id (Modificar de otra forma) 
rutasCiudades.patch('/patch/:id', ciudadesController.patchCiudades);

// PATCH de rutasCiudades por Id (Modificar de forma natural) 
rutasCiudades.patch('/:id', ciudadesController.actualizarCiudades);

// DELETE de rutasCiudades por Id
rutasCiudades.delete('/:id', ciudadesController.borrarCiudades);

// Exportamos la constante routes con la colección de rutasCiudades
module.exports = rutasCiudades;
