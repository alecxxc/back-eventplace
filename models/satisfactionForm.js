const mongoose = require('mongoose');
const { Schema } = mongoose;

const satisfactionForm = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  event: { type: Schema.Types.ObjectId, ref: 'Event', required: true, index: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  feedback: { type: String },
  answers: [{ 
    question: String,
    answer: String 
  }],
}, {
  timestamps: true
});

//Evita duplicados
satisfactionForm.index({ user: 1, event: 1}, {unique: true });

const SatisfactionForm = mongoose.model('SatisfactionForm', satisfactionForm, 'satisfactionForms');

module.exports = SatisfactionForm;  