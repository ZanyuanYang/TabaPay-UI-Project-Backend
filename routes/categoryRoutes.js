import express from 'express';
import {
  create,
} from '../controllers/categoryController.js';

const router = express.Router();

router.route('/category/:menuName').post(create);

export { router as categoryRouter };
