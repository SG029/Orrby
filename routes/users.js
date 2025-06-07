const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/orrby');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dp: {
    type: String // URL to display picture/avatar
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);

