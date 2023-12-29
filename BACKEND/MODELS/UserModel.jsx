const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   email:{
    type:String,
    requied:true,
    trim: true,
    minLength: 5,
    unique: true,
   },
   username:{
    type:String,
    requied:true,
    minLength:3,
    maxLength: 10
   },
  password:{
    type:String,
    requied:true,
    minLength:3,
    maxLength: 20
   },
   mobilenumber:{
    type:Number,
    requied:true
 }
  });
  const User = mongoose.model('User', userSchema);
  module.exports = User;
  
