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
    avatar: {type: String}, //avatar qualities
    shoeStyle: {type: Number, default: 1},
    shoeColor: {type: Number, default: 1},
    skinColor: {type: Number, default: 1},
    beltColor: {type: Number, default: 1},
    pantsColor: {type: Number, default: 1},
    pantsStyle: {type: Number, default: 1},
    shirtStyle: {type: Number, default: 1},
    sleeveStyle: {type: Number, default: 1},
    sleeveColor: {type: Number, default: 1},
    shirtColor: {type: Number, default: 1},
    hairStyle: {type: Number, default: 1},
    hairColor: {type: Number, default: 1},
    mouthStyle: {type: Number, default: 1},
    noseStyle: {type: Number, default: 1},
    eyeStyle: {type: Number, default: 1},
    eyeColor: {type: Number, default: 1},
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

//userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const User = model("User", userSchema);

module.exports = User;