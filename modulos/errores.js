const functionError = () => {
  error();
};

const error = () => {
  return 3 + z;
};

const errorAsync = () => {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error(`Error asíncrono: ${error.message}`);
    }
  }, 2000);
};

try {
  error();
} catch (error) {
  console.error(`A ocurrido un error: ${error.message}`);
}

errorAsync();
