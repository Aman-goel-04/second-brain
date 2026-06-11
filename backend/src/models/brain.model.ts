import mongoose from "mongoose";

const brainSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},

		description: {
			type: String,
		},

		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},

		links: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Link",
			},
		],

		isPublic: {
			type: Boolean,
			default: false,
		},

		slug: {
			type: String,
			unique: true,
		},

		tags: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Tag",
			},
		],
	},
	{
		timestamps: true,
	},
);

export default mongoose.model("Brain", brainSchema);
