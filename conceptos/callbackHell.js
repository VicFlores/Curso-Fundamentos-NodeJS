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

// ------

const hablar = (callback) => {
  setTimeout(() => {
    console.log('Toy hablando jijijiji');
    callback();
  }, 1000);
};

const conversation = (nombre, veces, callback) => {
  if (veces > 0) {
    hablar(() => {
      conversation(nombre, --veces, callback);
    });
  } else {
    despedida(nombre, callback);
  }
};

console.log('Iniciando proceso');
saludo('Vic', (nombre) => {
  conversation(nombre, 3, () => {
    console.log('Proceso terminado');
  });
});
/* saludo('Vic', () => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        hablar(() => {
          despedida('Vic', () => {
            console.log('Terminando proceso');
          });
        });
      });
    });
  });
}); */
