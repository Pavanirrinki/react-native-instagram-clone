const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   email:{
    type:String,
    requied:true,
    trim: true,
    unique: true,
   },
   username:{
    type:String,
    requied:true,
   },
  password:{
    type:String,
    requied:true,
 },
   mobilenumber:{
    type:Number,
    requied:true
 },
 followers:[{
   type: mongoose.Schema.Types.ObjectId,
   ref:"User"
 }],
 following:[{
   type: mongoose.Schema.Types.ObjectId,
   ref:"User"
 }],
 uploaded_posts:[{
  type: mongoose.Schema.Types.ObjectId,
  ref:"Post"
 }],
 stories:[{
  type: mongoose.Schema.Types.ObjectId,
  ref:"Stories"
}]
 
  });
  const User = mongoose.model('User', userSchema);
  module.exports = User;
  
