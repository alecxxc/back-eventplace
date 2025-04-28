const Event = require('../../models/event');
const User = require('../../models/user');
const Subscription = require('../../models/subscription');
const Comment = require('../../models/comment');

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
  return 'Te has suscrito a un evento';
};

async function showSubscriptions ({ id }) {
  const subscriptions = await Subscription.find({ user: id }, { user: false, subscriptionDate: false, __v: false }).populate('event', 'name category image place date time director status capacity');

  if (subscriptions.length === 0) throw new Error ('No te has suscrito a ningún evento');

  return subscriptions; 
};

async function cancelSubcription ({ _id }) {
  await Subscription.findByIdAndDelete(_id);
  return 'Suscripción cancelada';
};

async function availableEvents () {
  const events = await Event.find({ status: 'Por realizar' }).populate('director', 'name -_id');

  if (events.length === 0) {
    throw new Error ('No hay eventos disponibles');
  }

  return events;
};

async function comment ({ _id, message, rating }, { id }) {
  if (!_id || !message || !rating) throw new Error ('No se puede crear un comentario');
  if (!message || !rating) throw new Error ('Todos los campos son obligatorios');

  const comment = new Comment ({ event: _id, user: id, message, rating });
  await comment.save();

  return 'Comentario creado';
};

async function showComments ({ id }) {
  const comments = await Comment.find({ user: id }, { user: false, createdAt: false, __v: false }).populate('event', 'name');
  
  if (comments.length === 0) throw new Error ('No has comentado en eventos');
  
  return comments;
};

async function editComment ({ _id, message }) {
  const comment = await Comment.findByIdAndUpdate(_id, { message }, { new: true });
  return comment;
};

async function deleteComment ({ _id }) {
  await Comment.findByIdAndDelete(_id);
  return 'Comentario eliminado';
};

module.exports = { 
  getData,
  updateName,
  subscription,
  showSubscriptions,
  cancelSubcription,
  availableEvents,
  comment,
  showComments,
  editComment,
  deleteComment
};