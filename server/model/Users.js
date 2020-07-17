const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 30,
  },
  email: {
    type: String,
    trim: true,
    unique: 1, // 중복 x
  },
  password: {
    type: String,
    maxlength: 100,
  },
  role: {
    type: Number,
    default: 0, // 기본 값
  },
  image: String,
  token: String, // 토근
  tokenExp: Number, // 토근 유효  기간
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
