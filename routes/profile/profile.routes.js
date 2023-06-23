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


router.get("/profile/avatar", (req, res, next) => {
  res.render("profile/avatar", {loggedIn: true});
});

module.exports = router;
