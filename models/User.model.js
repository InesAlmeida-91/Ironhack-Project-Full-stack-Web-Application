const { Schema, model } = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    facebookId: { 
      type: String 
    },
    googleId: { 
      type: String 
    },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }]
  },
  {    
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
