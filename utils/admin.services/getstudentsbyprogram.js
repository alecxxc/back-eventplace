const User = require('../../models/user');

async function getStudentsByProgram (programName) {
  const students = await User.find({
    rol: { $nin: ['Administrador', 'Director'] },
    program: programName
  }, 'name email rol program').sort('name');

  if (students.length === 0) {
    throw new Error(`No hay estudiantes registrados en el programa de ${programName}`);
  }

  return students;
};

module.exports = getStudentsByProgram;