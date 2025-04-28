function checkRol (allowedRol) {
  return (req, res, next) => {
    if (!allowedRol.includes(req.user.rol)) {
      return res.status(403).json({ error: 'Acceso denegado' });
    } 
    next();
  }
};

module.exports = checkRol;