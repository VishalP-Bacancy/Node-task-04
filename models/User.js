const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      maxlength: 32, // Rule: name should not be greater than 32 chars
      required: true,
    },
    age: {
      type: Number,
      min: 1, // Rule: age should be within the range of 1 to 100
      max: 100,
      required: true,
    },
    phone_no: {
      type: String,
      match: /^[0-9]{10}$/, // Rule: phone_no should be a 10-digit numeric value
      required: true,
    },
  });

  userSchema.pre('save', function (next) {
    this.name = this.name.toUpperCase(); 
    next();
  });
  
  userSchema.post('save', function (doc) {
    console.log(`User "${doc.name}" with ID ${doc._id} saved successfully.`);
  });
  

  module.exports = mongoose.model('User', userSchema);