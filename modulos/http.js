const http = require('http');

http.createServer(router).listen(3001);

function router(req, res) {
  console.log('Nueva petición');

  switch (req.url) {
    case '/home':
      res.write('Hola desde Home');
      res.end();
      break;

    default:
      res.write('Pagina no encontrada D:');
      res.end();
      break;
  }

  /* console.log(req.url);

  res.writeHead(201, { 'Content-Type': 'text/plain' });

  res.write('Ya se utilizar http de nodeJS');

  res.end(); */
}

console.log('Corriendo en el puerto 3000');
