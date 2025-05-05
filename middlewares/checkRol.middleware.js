const User = require('../models/user');

function checkRol (roleAvailable) {
  return async (req, res, next) => {
    if (!req.user.id) return res.status(400).json({ error: 'No se puede acceder a la informacion'})
    try {
      const user = await User.findById(req.user.id);
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

      if (user.rol === roleAvailable) {
         next(); 
      } else {
        return res.status(403).json({ error: 'Acceso denegado. Rol no autorizado' });
      }

    } catch (error) {
      return res.status(403).json({ error: 'Error interno del servidor' });
    }
  }
};

module.exports = checkRol;