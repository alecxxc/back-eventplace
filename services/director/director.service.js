const Event = require('../../models/event');
const validateEventFields = require('../../utils/director.services/validateeventfields')

async function createEvent ({ name, category, image, place, date, time, status }, { id }) {
  validateEventFields({ name, category, image, place, date, time, status });

  const newEvent = new Event({ name, category, image, place, date, director: id, status: 'Por realizar' });
  await newEvent.save();

  const populatedEvent = await Event.findById(newEvent._id).populate('director', 'name -_id');

  return populatedEvent;
};

async function checkEvents ({ id }) {
  const eventsCreated = await Event.find({director: id}, {_id: false }).populate('director', 'name -_id');

  if (eventsCreated.length === 0) {
    throw new Error ('No tienes eventos creados');
  }

  return eventsCreated;
};

async function updateEvent ({ id, name, category, image, place, date, status }) {
  validateEventFields({ name, category, image, place, date, status });

  const editEvent = await Event.findByIdAndUpdate(id, { name, category, image, place, date, status }, { new: true });
  
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
  createEvent,
  checkEvents,
  updateEvent,
  deleteEvent, 
};