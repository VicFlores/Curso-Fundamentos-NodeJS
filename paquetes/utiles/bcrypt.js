const bcrypt = require('bcrypt');

const password = 'ABC123???';

bcrypt.hash(password, 10, (error, hash) => {
  console.log(hash);

  bcrypt.compare(password, hash, (error, res) => {
    console.log(res);
  });
});
