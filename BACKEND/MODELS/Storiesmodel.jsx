const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
 stories:{
    type:String,
    required:true
 },
 createdAt: {
    type: Date,
    default: Date.now,
   
  }
 });
 
  const Stories = mongoose.model('Stories', StorySchema);
  module.exports = Stories;
  
