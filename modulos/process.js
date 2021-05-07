process.on('uncaughtException', (err, orig) => {
  console.error('Error no capturado');
  console.error(`Error: ${err.message}`);
});

process.on('beforeExit', () => {
  console.log('El proceso acabara pronto');
});

process.on('exit', () => {
  console.log('Proceso acabado');
});

functionError();
