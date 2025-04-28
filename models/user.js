const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, index: true, required: true, unique: true},
  password: { type: String, required: true},
  rol: {
    type: String,
    enum: ['Estudiante', 'Director', 'Administrador'],
    default: 'Estudiante'
  },
  program: { 
    type: String,
    enum: ['Ingeniería industrial', 'Ingeniería de software', 'Profesional en ciencias del deporte'], 
    required: true
  },
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;