const bcrypt = require('bcrypt');
const saltRounds = 10;

const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectId;
const User = require('../../models/User.model');
const { isLoggedIn } = require('../../middleware/route.guard');
const Post = require('../../models/Post.model');
const Comment = require('../../models/Comment.model');


router.get("/profile/:profile", async (req, res, next) => {
  try {
    const foundUser = await User.findOne({ username: req.params.profile });
    if(foundUser){
      if(req.session.currentUser){
        if(req.session.currentUser.username === req.params.profile){
          res.render('profile/userProfile', {foundUser: foundUser, isOwner: true, currentUser: req.session.currentUser})  
        }
        else{res.render('profile/userProfile', {foundUser: foundUser, currentUser: req.session.currentUser})}
      }
      else{
        res.render('profile/userProfile', {foundUser: foundUser})
      }
    }
    else{res.redirect('/')}
  }
  catch (error) { next(error) }
});


router.get("/profile/:profile/avatar", isLoggedIn, async (req, res, next) => {
  try {
    const foundUser = await User.findOne({ username: req.params.profile });
    if(req.session.currentUser.username === req.params.profile){
      res.render(`profile/avatar`, {loggedIn: true, currentUser: foundUser});
    }
    else{ res.redirect('/') }
  }
  catch (error) { next(error); }
});

router.post("/profile/:profile/avatar", isLoggedIn, async (req, res, next) => {
  if(req.session.currentUser.username === req.params.profile){
    await User.findOneAndUpdate({username: req.session.currentUser.username}, req.body);
    res.redirect(`/profile/${req.session.currentUser.username}`)
  }
  else{ res.redirect('/') }
});

router.get('/profile/:profile/updateProfile', isLoggedIn, (req, res) => {
  if(req.session.currentUser.username === req.params.profile){
    res.render(`profile/updateProfile`, { foundUser: req.session.currentUser, currentUser: req.session.currentUser});
  }
  else{ res.redirect('/'); }
});

router.post('/profile/:profile/updateProfile', isLoggedIn, async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const { currentUser } = req.session;
    const updatedProfile = await User.findOneAndUpdate(
      { email: currentUser.email },
      { username, email },
      { new: true }
    );
    req.session.currentUser = { username, email, password };
    res.redirect(`/profile/${req.session.currentUser.username}`);
  } catch (error) { next(error); }
});

router.post('/profile/:profile/delete', isLoggedIn, async (req, res, next) => {
  try {
    const { currentUser } = req.session;
    console.log(currentUser._id);
    Post.deleteMany({author: new ObjectID(currentUser._id)});
    Comment.deleteMany({author: new ObjectID(currentUser._id)});
    await User.findOneAndDelete({ email: currentUser.email });
    req.session.destroy();
    res.render('profile/deletedProfile', { successMessage: 'Your profile has been deleted' });
  }
  catch (error) { next(error); }
});

module.exports = router;
