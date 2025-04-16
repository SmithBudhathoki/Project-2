// models/itemModel.js
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Item name is required'],
    minlength: [2, 'Item name must be at least 2 characters long']
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number']
  }
});

const Item = mongoose.model('Item', itemSchema);
export default Item;
