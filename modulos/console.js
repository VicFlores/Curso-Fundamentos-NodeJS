let tabla = [
  {
    name: 'Vic Flores',
    age: 20,
    user: 'VicFlores11',
  },
  {
    name: 'Vanessa Flores',
    age: 22,
    user: 'Sidny11',
  },
];

/* Console.log */
console.log('Recibe cualquier tipo y lo muestra en el consola.');

/* Console.info */
console.info('Es usado para informar.');

/* Console.error */
console.error('Es usado para errores.');

/* Console.warn */
console.warn('Es usado para warning.');

/* Console.table */
console.table(tabla);

/** Console.group */
console.group('Console.group');
console.log('Permite agrupar');
console.log('diferentes');
console.log('consoles con');
console.log('indentation');
console.groupEnd('Console.group');
