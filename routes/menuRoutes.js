import express from 'express';
import {
  getAll,
  create,
} from '../controllers/menuController.js';

const router = express.Router();

router.route('/menu').get(getAll);
router.route('/menu').post(create);

export { router as menuRouter };
