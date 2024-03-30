const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  role: {
    type: String,
    enum: ['student', 'faculty', 'admin'],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  previousRides: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking'
  }],
  profilePicture: {
    type: String
  },
  payLater: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
