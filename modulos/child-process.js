/** Ejecuta procesos */
const { exec, spawn } = require('child_process');

/* exec('node modulos/console.js', (error, stdout, stderr) => {
  if (error) {
    return `Error: ${error}`;
  }

  console.log(stdout);
}); */

let proceso = spawn('ls', ['-la']);

console.log(proceso.connected);
console.log(proceso.pid);

proceso.stdout.on('data', (data) => {
  console.log(process.killed);
  console.log(`Data: ${data.toString()}`);
});

proceso.on('exit', () => {
  console.log('Proceso acabado');
});
