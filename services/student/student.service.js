const Event = require('../../models/event');
const User = require('../../models/user');
const Subscription = require('../../models/subscription');
const satisfactionForm = require('../../models/satisfactionForm');

async function getData ({ id }) {
  const user = await User.findById(id);
  
  if (!user) throw new Error ('Usuario no encontrado, diríjase al apartado de inicio de sesión y ingrese sus credenciales');

  const { name, email, rol, program } = user;
  return { name, email, rol, program };
};

async function updateName ({ id }, { name }) { 
  if (!name) {
    throw new Error ('Nombre vacío');
  }

  const userUpdate = await User.findByIdAndUpdate(id, { name }, { new: true });
  return `Nombre actualizado a: ${userUpdate.name}`;
};

async function subscription (idUser, { _id }) {
  if (!_id) throw new Error ('No se puede hacer la suscripción');

  const subscription = new Subscription ({ user: idUser, event: _id });
  await subscription.save();
  return 'Te has suscrito a un evento. Puedes ver tus suscripciones en el apartado del perfil';
};

async function showSubscriptions ({ id }) {
  const subscriptions = await Subscription.find({ user: id }, { user: false, subscriptionDate: false, __v: false })
    .populate({
      path: 'event', 
      select: 'name category image place date time director description status capacity reservedPlace',
      populate: {
        path: 'director',
        select: 'name -_id'
      }
    });

  if (subscriptions.length === 0) return 'No te has suscrito a ningún evento';

  return subscriptions; 
};

async function cancelSubcription ({ _id }) {
  await Subscription.findByIdAndDelete(_id);
  return 'Suscripción cancelada';
};

async function availableEvents () {
  const events = await Event.find({ status: 'Por realizar' }).populate('director', 'name -_id');

  if (events.length === 0) {
    return ('No hay eventos por realizar');
  }

  return events;
};


async function fillForm ({ id }, { _id, rating, feedback, answers }) {
  if (!_id || !rating || !feedback) {
    throw new Error ('Todos los campos del formulario son obligatorios');
  }

  const form = new satisfactionForm ({ user: id, event: _id, rating, feedback, answers });
  await form.save();
  return 'Formulario creado';
}

module.exports = { 
  getData,
  updateName,
  subscription,
  showSubscriptions,
  cancelSubcription,
  availableEvents,
  fillForm
};