import mongoose from 'mongoose';


const bookShopSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true
  },
  image: {
    type: String, 
    required: true
  },
  
  type: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  page: {
    type: String,
    required: true
  },



  Des: {
    type: String,
    required: true
  }
});


const bookShop = mongoose.model('bookShop', bookShopSchema);

export default  bookShop;