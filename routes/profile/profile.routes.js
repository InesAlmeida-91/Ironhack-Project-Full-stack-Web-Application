const express = require('express');
const router = express.Router();

const User = require('../../models/User.model');
const { isLoggedIn } = require('../../middleware/route.guard');


router.get("/profile", isLoggedIn, async (req, res, next) => {
  try {
    if(req.session.currentUser){
      const foundUser = await User.findOne({ username: req.session.currentUser.username });
      foundUser.loggedIn = true;
      res.render('profile/userProfile', foundUser)    
    }
    else{
      res.render('/')
    }
  } catch (error) {
  console.log(error)
    }
});


router.get("/temp", (req, res, next) => {
  res.render("profile/avatar");
});

module.exports = router;
