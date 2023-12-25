import express from 'express';
import {
	getPostsByCategory,
	createPost,
	likePostById,
	getPostById,
	deletePostById
} from '../controllers/postController.js';

const router = express.Router();

router.route('/post/:category').get(getPostsByCategory);
router.route('/post/:category/:id').get(getPostById).post(likePostById).delete(deletePostById);
router.route('/post').post(createPost);

export { router as postRouter };