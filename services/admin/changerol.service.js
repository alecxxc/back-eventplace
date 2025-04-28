const User = require('../../models/user');

async function changeRol ({ id, rol }) {
  const rolAvailable = ['Estudiante', 'Director']
  if (!id || !(rolAvailable.includes(rol))){
    throw new Error ('No se puede cambiar el rol');
  }

  await User.findByIdAndUpdate(id, {rol}, { new: true });
  return 'Usuario actualizado';
}

module.exports = {
  changeRol
};