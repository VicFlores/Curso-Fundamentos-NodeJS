const saludo = async (nombre) => {
  await setTimeout(() => {
    console.log(`Hola soy ${nombre}`);
  }, 1000);
};

const hablar = async () => {
  await setTimeout(() => {
    console.log('Toy hablando jijijiji');
  }, 1000);
};

const despedida = async (nombre) => {
  await setTimeout(() => {
    console.log(`Adios ${nombre}`);
  }, 1000);
};

console.log('Iniciando proceso');

saludo('Vic');
hablar();
hablar();
hablar();
despedida('Vic');
