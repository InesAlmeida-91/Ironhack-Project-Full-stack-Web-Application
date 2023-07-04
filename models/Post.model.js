const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    title: String,
    imageUrl: String,
    content: String,
    theme: String,
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    commentcount: {type: Number, default: 0},
  },
  {
    timestamps: true
  }
);

const Post = model("Post", postSchema);

module.exports = Post;