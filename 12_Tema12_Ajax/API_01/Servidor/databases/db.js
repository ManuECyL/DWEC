// Importamos Libreria de mysql
const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    // host: '0.0.0.0', // Localhost
    host: '192.168.7.207', // Clase
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


// Exportamos la constante con los datos de la conexión usando la metodología de express
module.exports = db;