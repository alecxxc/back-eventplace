const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

const Comment = mongoose.model('Comment', commentSchema, 'comments');
module.exports = Comment;