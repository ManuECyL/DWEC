const express = require('express');
const cors = require('cors');
const multer = require('multer');

// Importamos la constante routes con la colección de ciudades
const rutasCiudades = require('./rutas/rutas_ciudades');

const ciudades = express();
const puerto = 3000;

// Necesario para parsear el cuerpo de las peticiones a json y que no de error
ciudades.use(express.json());

ciudades.use(cors());

// Middleware para manejar datos codificados en formato x-www-form-urlencoded
ciudades.use(express.urlencoded({ extended: true }));

// Configuración de Multer
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Directorio donde se guardarán los archivos
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname) // Nombre original del archivo
    }
});

const upload = multer({ storage: storage });

// Middleware Multer para manejar archivos
ciudades.use(upload.any());

// Necesario para realizar la consulta get sobre la tabla ciudades
ciudades.use('/ciudades', rutasCiudades);

// Comprobar por que puerto está escuchando nuestro servidor
ciudades.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});