// Importamos la libreria express
const express = require('express');

// rutasCiudades va a ser una colección de rutas
const rutasCiudades = express.Router();

// Importamos el contenido de ciudadesController para poder hacer la consulta con get
const ciudadesController = require('../controllers/ciudadesController');

// GET de rutasCiudades
rutasCiudades.get('/', ciudadesController.getCiudades);

// // GET de rutasCiudades por Id
// rutasCiudades.get('/:id', ciudadesController.getCiudadesById);

// GET de rutasCiudades por Nombre
rutasCiudades.get('/:nombre', ciudadesController.getCiudadesByName);

// DELETE de rutasCiudades por Id
rutasCiudades.delete('/:id', ciudadesController.borrarCiudades);

// Exportamos la constante routes con la colección de rutasCiudades
module.exports = rutasCiudades;
