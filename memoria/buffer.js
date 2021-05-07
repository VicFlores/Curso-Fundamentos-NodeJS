//* Espacio en memoria recibiendo binarios

/* let buffer = Buffer.alloc(5); */

/* let buffer = Buffer.from([1, 2, 3, 4, 5]); */

/* let buffer = Buffer.from('Hola Vic'); */

/* console.log(buffer.toString()); */
/* console.log(buffer); */

//* Abecedario usando buffer

let abecedario = Buffer.alloc(26);

console.log(abecedario);

for (let i = 0; i <= 26; i++) {
  abecedario[i] = i + 97;
}

console.log(abecedario.toString());
