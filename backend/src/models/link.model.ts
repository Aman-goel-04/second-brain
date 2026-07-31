import mongoose from "mongoose";

const linkSchema = new mongoose.Schema(
	{
		url: {
			type: String,
			required: true,
		},

		title: {
			type: String,
		},

		note: {
			type: String,
		},

		type: {
			type: String,
			enum: ["article", "tweet", "youtube", "github", "wiki", "other"],
			default: "other",
		},

		favicon: {
			type: String,
		},

		thumbnail: {
			type: String,
		},

		brain: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Brain",
		},

		addedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
            required: true
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.model("Link", linkSchema);
