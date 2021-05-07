const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

//* Stream de lectura

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf8');

readableStream.on('data', (chunk) => {
  data += chunk;
});

readableStream.on('end', () => {
  console.log(data);
});

//* Stream de escritura

const transform = stream.Transform;

const mayus = () => {
  transform.call(this);
};

util.inherits(mayus, transform);

mayus.prototype._transform = (chunk, codif, callback) => {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  callback();
};

let mayuscula = new mayus();

ReadableStream.pipe(mayus).pipe(process.stdout);
