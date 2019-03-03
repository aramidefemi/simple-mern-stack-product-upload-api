let mongoose = require('mongoose')  
var Schema = mongoose.Schema;
 
let productSchema = new Schema({
  name: String, 
  description: String, 
  price: String, 
  category: String,
  image: String,
  color: String, 
})
 

const product = mongoose.model('product', productSchema); 


module.exports = product