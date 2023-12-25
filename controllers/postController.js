import Post from '../models/post.js';
import {StatusCodes} from 'http-status-codes';

const getPostsByCategory = async (req, res) => {
	try {
		const category = req.params.category;

		// Find posts by category and sort them by createdAt in descending order
		const posts = await Post.find({ category: category }).sort({ createdAt: -1 });

		res.status(StatusCodes.OK).json(posts);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};


const createPost = async (req, res)	=> {
	const post = req.body;
	const newPost = new Post(post);
	try {
		await newPost.save();
		res.status(StatusCodes.CREATED).json(newPost);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

const likePostById = async (req, res) => {
	const { id } = req.params;
	console.log(id)
	try {
		const post = await Post.findById(id);
		const updatedPost = await Post.findByIdAndUpdate(id, { like: post.like + 1 }, { new: true });
		res.status(StatusCodes.OK).json(updatedPost);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

const getPostById = async (req, res) => {
	const { id } = req.params;
	try {
		const post = await Post.findById(id);
		res.status(StatusCodes.OK).json(post);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

const deletePostById = async (req, res) => {
	const { id } = req.params;
	try {
		const post = await Post.findByIdAndDelete(id);
		res.status(StatusCodes.OK).json(post);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}

}

export{
	getPostsByCategory,
	createPost,
	likePostById,
	getPostById,
	deletePostById
}