const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/orrby');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  postText: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);
