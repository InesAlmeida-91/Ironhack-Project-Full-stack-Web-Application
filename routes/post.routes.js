const express = require('express');
const { isLoggedIn } = require('../middleware/route.guard');
const router = express.Router();

/* GET home page */
router.post("/post", (req, res, next) => {
  if(req.session.currentUser){
    console.log(req.body)
  }
  else {res.redirect("/");}
});

module.exports = router;
