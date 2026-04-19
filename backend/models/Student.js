const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true, // we can use email as a unique identifier for portfolios
  },
  course: {
    type: String,
    required: true,
  },
  gpa: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  skills: {
    type: [String], // Array of strings like ['React', 'Node.js']
    required: true,
  },
  projectTitle: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    required: true,
  }
}, {
  timestamps: true // Adds createdAt and updatedAt
});

module.exports = mongoose.model('Student', studentSchema);
