const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please enter a username'],
      unique: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, 'Please add an email address'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please enter a valid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please enter a Password'],
      minlength: 6,
    },
    role: {
      type: Array,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    activated: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
