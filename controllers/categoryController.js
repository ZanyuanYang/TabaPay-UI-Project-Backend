import Category from '../models/category.js';
import Menu from '../models/menu.js';
import { StatusCodes } from 'http-status-codes';


const create = async (req, res) => {
  try {
    const menuName = req.params.menuName;
    const menu = await Menu.findOne({ name: menuName });

    if (!menu) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Menu not found',
      });
    }

    const category = new Category(req.body);
    await category.save();

    const updatedMenu = await Menu.findOneAndUpdate(
        { name: menuName },
        { $push: { categories: category.name } },
        { new: true, useFindAndModify: false }  // Get the updated document
    );

    // Send a response with the updated menu details
    res.status(StatusCodes.CREATED).json({
      message: 'Category added successfully',
      updatedMenu: updatedMenu.name  // Or any other relevant data from updatedMenu
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export { create };
