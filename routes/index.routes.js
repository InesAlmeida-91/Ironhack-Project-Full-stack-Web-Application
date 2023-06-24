const express = require('express');
const { isLoggedIn } = require('../middleware/route.guard');
const router = express.Router();
const Post = require('../models/Post.model');

/* GET home page */
router.get("/", async (req, res, next) => {
  try{
    const postArray = await Post.find().populate('author')
    const latestFirst = []; 
    postArray.forEach(element => {
      latestFirst.unshift(element)
      latestFirst[0].commentcount = element.comments.length;
    });
    if(req.session.currentUser){
      res.render('index', {postArray: latestFirst, loggedIn: true, currentUser: req.session.currentUser});
    }
    else {res.render("index", {postArray: latestFirst});}
  }
  catch(error){
    res.render('auth/signup', {errorMessage: 'invalid username or email'})
    console.log(error);
  }
});

module.exports = router;
