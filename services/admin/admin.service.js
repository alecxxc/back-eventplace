const User = require('../../models/user');
const Event = require('../../models/event');

const getDirectorsByProgram = require('../../utils/admin.services/getdirectorsbyprogram');
const getStudentsByProgram = require('../../utils/admin.services/getstudentsbyprogram');

//Búsquedas de Usuario

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

async function changeRol ({ _id, rol }) {
  const rolAvailable = ['Estudiante', 'Director']
  if (!_id || !rol || !(rolAvailable.includes(rol))){
    throw new Error ('No se puede cambiar el rol');
  }

  await User.findByIdAndUpdate(_id, {rol}, { new: true });
  return 'Usuario actualizado';
};


//Búsquedas de eventos por categoría

async function checkEventAcademico () {
  const eventsAcademico = Event.find({ category: 'Académico' }).populate('director', 'name -_id');
  if (eventsAcademico.length === 0) {
    return 0;
  }
  return eventsAcademico;
};

async function checkEventCultural () {
  const eventsCultural = Event.find({ category: 'Cultural' }).populate('director', 'name -_id');
  if (eventsCultural.length === 0) {
    return 0;
  }
  return eventsCultural;
};

async function checkEventDeportivo () {
  const eventsDeportivo = Event.find({ category: 'Deportivo' }).populate('director', 'name -_id');
  if (eventsDeportivo.length === 0) {
    return 0;
  }
  return eventsDeportivo;
};

async function checkEventArtistico () {
  const eventsArtistico = Event.find({ category: 'Artístico' }).populate('director', 'name -_id');
  if (eventsArtistico.length === 0) {
    return 0;
  }
  return eventsArtistico;
};

async function checkEventTecnologico () {
  const eventsTecnologico = Event.find({ category: 'Tecnológico' }).populate('director', 'name -_id');
  if (eventsTecnologico.length === 0) {
    return 0;
  }
  return eventsTecnologico;
};

module.exports = {
  getIndustrialDirectors,
  getSoftwareDirectors,
  getSportDirectors,
  getIndustrialStudents,
  getSoftwareStudents,
  getSportStudents,
  changeRol,
  checkEventAcademico,
  checkEventCultural,
  checkEventDeportivo,
  checkEventArtistico,
  checkEventTecnologico
};