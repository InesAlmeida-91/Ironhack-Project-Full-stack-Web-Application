const bcrypt = require('bcrypt');
const saltRounds = 10;

const express = require('express');
const router = express.Router();

const User = require('../../models/User.model');
const { isLoggedIn } = require('../../middleware/route.guard');


router.get("/profile/:profile", async (req, res, next) => {
  try {
    const foundUser = await User.findOne({ username: req.params.profile });
    if(foundUser){
      if(req.session.currentUser){
        if(req.session.currentUser.username === req.params.profile){
          res.render('profile/userProfile', {foundUser: foundUser, isOwner: true, loggedIn: true, currentUser: req.session.currentUser})  
        }
        else{res.render('profile/userProfile', {foundUser: foundUser, loggedIn: true, currentUser: req.session.currentUser})}
      }
      else{
        res.render('profile/userProfile', {foundUser: foundUser})
      }
    }
    else{res.redirect('/')}
  } catch (error) {
  console.log(error)
    }
});

//tofix
//
//Avatar
//Profile Model link avatar and add default

router.get("/profile/:profile/avatar", isLoggedIn, async (req, res, next) => {
  try {
    const foundUser = await User.findOne({ username: req.params.profile });
    if(req.session.currentUser.username === req.params.profile){
      res.render(`profile/avatar`, {loggedIn: true, currentUser: foundUser});
    }
    else{res.redirect('/')}
  }
  catch (error) {
    console.log(error)
  }

});

router.post("/profile/:profile/avatar", isLoggedIn, async (req, res, next) => {
  if(req.session.currentUser.username === req.params.profile){
    await User.findOneAndUpdate({username: req.session.currentUser.username}, req.body);
    res.redirect(`/profile/${req.session.currentUser.username}`)
  }
  else{res.redirect('/')}
});

router.get('/profile/:profile/updateProfile', isLoggedIn, (req, res) => {
  if(req.session.currentUser.username === req.params.profile){
    res.render(`profile/updateProfile`, { foundUser: req.session.currentUser, loggedIn: true, currentUser: req.session.currentUser});
  }
  else{res.redirect('/')}
});
//tofix, remove password as a edit and create a get route to edit password separately
router.post('/profile/:profile/updateProfile', isLoggedIn, async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const { currentUser } = req.session;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const updatedProfile = await User.findOneAndUpdate(
      { email: currentUser.email },
      { username, email, passwordHash: hashedPassword },
      { new: true }
    );
    req.session.currentUser = { username, email, password };
    res.redirect(`/profile/${req.session.currentUser.username}`);
  } catch (error) {
    console.log(error);
  }
});

router.post('/profile/:profile/delete', isLoggedIn, async (req, res) => {
  try {
    const { currentUser } = req.session;
    const deletedUser = await User.findOneAndDelete({ email: currentUser.email });
    //missing the deleted posts
    req.session.destroy();
    res.render('profile/deletedProfile', { successMessage: 'Your profile has been deleted' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
