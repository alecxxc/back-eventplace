const mongoose = require('mongoose');
const {Schema} = mongoose;

const subscriptionSchema = new Schema ({
  user: { type: Schema.Types.ObjectId, ref:  'User', required: true, index: true },
  event: { type: Schema.Types.ObjectId, ref: 'Event', required: true, index: true},
  subscriptionDate: { type: Date, default: Date.now}
}, {
  timestamps: true
});

// Prevenir inscripciones duplicadas
subscriptionSchema.index({ user: 1, event: 1 }, { unique: true });

const Subscription = mongoose.model('Subscription', subscriptionSchema, 'subscriptions');

module.exports = Subscription;