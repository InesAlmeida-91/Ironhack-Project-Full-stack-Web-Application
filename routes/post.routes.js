const express = require('express');
const { isLoggedIn } = require('../middleware/route.guard');
const router = express.Router();
const Post = require('../models/Post.model');

/* GET home page */
router.post("/post", async (req, res, next) => {
  if(req.session.currentUser){
    await Post.create({
      author: req.session.currentUser._id,
      title: req.body.title,
      content: req.body.content,
      theme: req.body.theme,
      commentcount: 0,
    })  
    res.redirect('/')
  }
  else {res.redirect("/");}
});

module.exports = router;
