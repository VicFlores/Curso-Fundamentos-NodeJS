const fs = require('fs');

const leer = (ruta, cb) => {
  fs.readFile(ruta, (error, data) => {
    console.log(data.toString());
  });
};

const escribir = (ruta, contenido, cb) => {
  fs.writeFile(ruta, contenido, (error, data) => {
    if (error) {
      console.error('No he podido escribirlo D:');
    } else {
      console.log('Se ha escrito correctamente');
    }
  });
};

const borrar = (ruta, cb) => {
  fs.unlink(ruta, (error, data) => {
    if (error) {
      console.error('No hemos podido borrar su archivo');
    } else {
      console.log('Archivo eliminado');
    }
  });
};

/* leer(__dirname + '/example.txt'); */

/* escribir(__dirname + '/example2.txt', 'Soy un archivo nuevo'); */

/* borrar(__dirname + '/example2.txt'); */
