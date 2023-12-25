import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	introduction: {
		type: String,
		required: true,
	},
	category:{
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	like: {
		type: Number,
		default: 0,
	},
	lists: {
		type: [
			{
				name: {
					type: String,
					required: true
				},
				description: {
					type: String,
					required: true
				},
				websiteLink: {
					type: String,
					default: ''
				},
				imageUrl: {
					type: String,
					default: ''
				}
			}
		],
		default: [],
	}
});

const Post = mongoose.model('Post', PostSchema);

export default Post;