const User = require('../../models/user');

async function changeRol ({ _id, rol }) {
  const rolAvailable = ['Estudiante', 'Director']
  if (!_id || !(rolAvailable.includes(rol))){
    throw new Error ('No se puede cambiar el rol');
  }

  await User.findByIdAndUpdate(_id, {rol}, { new: true });
  return 'Usuario actualizado';
}

module.exports = {
  changeRol
};