const express = require('express');
const { isLoggedIn } = require('../middleware/route.guard');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  if(req.session.currentUser){
    res.render('index', {loggedIn: true});
  }
  else {res.render("index");}
});

module.exports = router;
