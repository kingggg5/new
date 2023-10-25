const mongoose = require('mongoose');
mongoose.set('strictQuery',true)  

const productSchema = new mongoose.Schema({ 
  img: String, 
  title: String,
  days: Number,
  points: Number,
  newPrice: Number,
  category: String
});

const Product = mongoose.model('Product', productSchema);
module.exports = Post;