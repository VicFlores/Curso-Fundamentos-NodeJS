const saludo = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola soy ${nombre}`);
      resolve(nombre);
    }, 1000);
  });
};

const hablar = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Toy hablando jijijiji');
      resolve(nombre);
    }, 1000);
  });
};

const despedida = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve();
    }, 1000);
  });
};

//--

console.log('Iniciando proceso...');

saludo('Vic')
  .then(hablar)
  .then(hablar)
  .then(despedida)
  .then((nombre) => {
    console.log('Proceso terminado');
  })
  .catch((error) => console.log(`Error: ${error}`));
