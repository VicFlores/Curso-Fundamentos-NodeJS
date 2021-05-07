const moment = require('moment');

let today = moment();

console.log(today.toString());

//* Formatear la fecha, elegimos como la queremos

console.log(today.format('YYYY/MM/DD'));
console.log(today.format('DD/MM/YYYY'));
console.log(today.format('DD/MM/YYYY - HH:mm'));
