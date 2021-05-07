//* --------------------------------------------------------------------------------

let suma = 0;

console.time('bucle');

for (let i = 0; i <= 1000000000; i++) {
  suma += 1;
}

console.timeEnd('bucle');

let suma2 = 0;

//* --------------------------------------------------------------------------------

console.time('bucle2');

for (let i = 0; i <= 1000000; i++) {
  suma2 += 1;
}

console.timeEnd('bucle2');

//* --------------------------------------------------------------------------------

const functionAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Function Async ejecutada :D');
    }, 2000);
  });
};

console.time('Function Async');

functionAsync();

console.timeEnd('Function Async');
