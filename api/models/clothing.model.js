import mongoose from 'mongoose';


const clothingSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true
  },
  image: {
    type: String, 
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },

  Des: {
    type: String,
    required: true
  }
});


const clothing = mongoose.model('clothing', clothingSchema);

export default  clothing;