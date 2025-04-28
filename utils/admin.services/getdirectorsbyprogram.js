const User = require('../../models/user');

async function getDirectorsByProgram (programName) {
  const directors = await User.find({
    rol: { $nin: ['Administrador', 'Estudiante'] },
    program: programName
  }, 'name email rol program').sort('name');

  if (directors.length === 0) {
    throw new Error (`No hay directores registrados en el programa de ${programName}`);
  }

  return directors;
};

module.exports = getDirectorsByProgram;