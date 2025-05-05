const jwt = require('jsonwebtoken');

const SECRET_KEY = 'llave_secreta';

function generateToken(user) {
  return jwt.sign(
    { id: user._id }, 
    SECRET_KEY,
    { expiresIn: '1h'}
  );
};

module.exports = generateToken;