const { Schema, model } = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username is required.'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required.'],
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

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const User = model("User", userSchema);

module.exports = User;
