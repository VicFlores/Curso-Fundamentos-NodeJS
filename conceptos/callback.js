const saludo = (nombre, callback) => {
  setTimeout(() => {
    console.log(`Hola soy ${nombre}`);
    callback();
  }, 1000);
};

const despedida = (nombre, callback) => {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    callback();
  }, 1000);
};

console.log('Iniciando proceso');
saludo('Vic', () => {
  despedida('Vic', () => {
    console.log('Terminando proceso');
  });
});
