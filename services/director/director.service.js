const Event = require('../../models/event');
const User = require('../../models/user');
const validateEventFields = require('../../utils/director.services/validateeventfields')

async function getData ({ id }) {
  const user = await User.findById(id);
  
  if (!user) throw new Error ('Usuario no encontrado, diríjase al apartado de inicio de sesión y ingrese sus credenciales');

  const { name, email, rol, program } = user;
  return { name, email, rol, program };
};

async function createEvent ({ name, category, image, place, date, time, description, status, capacity }, { id }) {
  validateEventFields({ name, category, image, place, date, time, description, status, capacity });

  const newEvent = new Event({ name, category, image, place, date, time, director: id, description, status: 'Por realizar', capacity });
  await newEvent.save();

  return 'Evento creado';
};

async function checkEvents ({ id }) {
  const eventsCreated = await Event.find({director: id}).populate('director', 'name -_id');

  if (eventsCreated.length === 0) {
    throw new Error ('No tienes eventos creados');
  }

  return eventsCreated;
};

async function updateEvent ({ _id, name, category, image, place, date, time, description, status, capacity }) {
  validateEventFields({ name, category, image, place, date, time, description, status, capacity });
  const editEvent = await Event.findByIdAndUpdate(_id, { name, category, image, place, date, time, description, status, capacity }, { new: true });
  
  if (!editEvent) {
    throw new Error ('Evento no encontrado');
  }
  
  return editEvent;
};

async function deleteEvent ({ id }) {
  const deleted = await Event.findByIdAndDelete(id);
  
  if (!deleted) {
    throw new Error ('Evento no encontrado');
  }

  return deleted;
};

module.exports = {
  getData,
  createEvent,
  checkEvents,
  updateEvent,
  deleteEvent, 
};