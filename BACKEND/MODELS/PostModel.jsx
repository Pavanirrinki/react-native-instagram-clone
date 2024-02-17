const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  post:{
    type:String,
    required:true
  },
  description:{
    type:String,
    default:"No Description......"
  },
  createdAt:{
    type:Date,
    default: Date.now
  }
 });
  const Post = mongoose.model('Post', PostSchema);
  module.exports = Post;
  