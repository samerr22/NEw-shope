import mongoose from 'mongoose';


const frnitureSchema = new mongoose.Schema({
 
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

  Des: {
    type: String,
    required: true
  }
});


const frniture = mongoose.model('frniture', frnitureSchema);

export default  frniture;