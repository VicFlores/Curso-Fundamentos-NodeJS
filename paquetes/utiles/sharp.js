const sharp = require('sharp');

sharp('tobi.jpg').resize(80).toFile('resized.png');
