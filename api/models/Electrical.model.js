import mongoose from 'mongoose';


const ElectricalSchema = new mongoose.Schema({
 
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
  type: {
    type: String,
    required: true
  },

  Des: {
    type: String,
    required: true
  }
});


const Electrical = mongoose.model('Electrical', ElectricalSchema);

export default  Electrical;