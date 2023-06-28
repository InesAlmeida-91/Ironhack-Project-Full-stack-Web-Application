const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    title: String,
    //add image here maybe and limit of 200mb?
    content: String, //put a limit of 200? or 300?
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