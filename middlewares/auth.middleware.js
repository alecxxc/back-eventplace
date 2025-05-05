const jwt = require('jsonwebtoken');

const SECRET_KEY = 'llave_secreta';

function checkToken (req, res, next) {
  const token = req.headers.authorization;

  if (!token) return res.status(403).json({ error: 'Acceso denegado. Token no proporcionado' });

  try {
    const cleanToken = token.replace("Bearer ", "");
    const verified = jwt.verify(cleanToken, SECRET_KEY);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  } 
};

module.exports = checkToken;