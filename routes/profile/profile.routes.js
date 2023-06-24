const bcrypt = require('bcrypt');
const saltRounds = 10;

const express = require('express');
const router = express.Router();

const User = require('../../models/User.model');
const { isLoggedIn } = require('../../middleware/route.guard');


router.get("/profile", isLoggedIn, async (req, res, next) => {
  try {
    if(req.session.currentUser){
      const foundUser = await User.findOne({ username: req.session.currentUser.username });
      res.render('profile/userProfile', {foundUser: foundUser, loggedIn: true})    
    }
    else{
      res.redirect('/')
    }
  } catch (error) {
  console.log(error)
    }
});


router.get("/profile/avatar", isLoggedIn, (req, res, next) => {
  res.render("profile/avatar", {loggedIn: true});
});



router.get('/profile/updateProfile', isLoggedIn, (req, res) => {
    res.render('profile/updateProfile', { foundUser: req.session.currentUser, loggedIn: true });
});

router.post('/profile/updateProfile', isLoggedIn, async (req, res) => {
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
    req.session.currentUser = updatedProfile;
    res.redirect('/profile');
  } catch (error) {
    console.log(error);
  }
});

router.post('/profile/delete', isLoggedIn, async (req, res) => {
  try {
    const { currentUser } = req.session;
    const deletedUser = await User.findOneAndDelete({ email: currentUser.email });
    //missing the deleted posts
    res.render('/profile/deletedProfile', { successMessage: 'Your profile has been deleted' });
  } catch (error) {
    console.log(error);
  }
});

//check other users profile (username and avatar)

module.exports = router;
