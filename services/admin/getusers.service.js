const getDirectorsByProgram = require('../../utils/admin.services/getdirectorsbyprogram');
const getStudentsByProgram = require('../../utils/admin.services/getstudentsbyprogram');

async function getIndustrialDirectors () {
  return await getDirectorsByProgram('Ingeniería industrial');
};

async function getSoftwareDirectors () {
  return await getDirectorsByProgram('Ingeniería de software');
};

async function getSportDirectors () {
  return await getDirectorsByProgram('Profesional en ciencias del deporte');
};


async function getIndustrialStudents () {
  return await getStudentsByProgram('Ingeniería industrial');
};

async function getSoftwareStudents () {
  return await getStudentsByProgram('Ingeniería de software');
};

async function getSportStudents () {
  return await getStudentsByProgram('Profesional en ciencias del deporte') 
};


module.exports = {
  getIndustrialDirectors,
  getSoftwareDirectors,
  getSportDirectors,
  getIndustrialStudents,
  getSoftwareStudents,
  getSportStudents
};