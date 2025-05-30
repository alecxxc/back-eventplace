const mongoose = require('mongoose');
const {Schema} = mongoose

const pqrSchema = new Schema ({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  gender: {
    type: String,
    enum: ['Petición', 'Queja', 'Reclamo']
  },
  message: { type: String }
}, {
  timestamps: true
});

const Pqr = mongoose.model('Pqr', pqrSchema, 'pqrs');

module.exports = Pqr;