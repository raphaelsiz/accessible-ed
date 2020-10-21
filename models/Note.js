const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true,'Please add a title'],
    unique: true;
    trim: true,
    maxLength: [40,'Too many characters!']
  },
  description: {
    type: String,
    required: ['true','Bruh that's not a note'],
    maxLength: [140,'Longer than a tweet!']
  }
});
module.exports = mongoose.models.Note || mongoose.model('Note', Schema);
    
