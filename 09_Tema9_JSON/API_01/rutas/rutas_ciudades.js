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

// Exportamos la constante routes con la colección de rutasCiudades
module.exports = rutasCiudades;
