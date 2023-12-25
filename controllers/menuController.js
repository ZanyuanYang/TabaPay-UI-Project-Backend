import Menu from '../models/menu.js';
import { StatusCodes } from 'http-status-codes';

const create = async (req, res) => {
  const menu = new Menu(req.body);
  await menu.save();
  res.status(StatusCodes.OK).json(menu);
};

const getAll = async (req, res) => {
  // get all menu
  try {
    const menus = await Menu.find();
    res.status(StatusCodes.OK).json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export { getAll, create };
