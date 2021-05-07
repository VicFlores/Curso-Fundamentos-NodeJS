const Async = (callback) => {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 2000);
};

Async((error, data) => {
  if (error) {
    console.error(`Tenemos un error: ${error.message}`);
    return false;
  }
  console.log('Todo a salido bien :D');
});
