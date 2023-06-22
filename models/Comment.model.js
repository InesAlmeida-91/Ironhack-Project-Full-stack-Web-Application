const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    comment: { type: Schema.Types.ObjectId, ref: "Comment" },
    content: String
  },
  {
    timestamps: true
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;