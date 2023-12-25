import mongoose from 'mongoose';


// Reference the child schema in the parent schema
const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  categories: {
    type: Array,
    default: []
  }
});

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
