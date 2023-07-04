const express = require('express');
const { isLoggedIn } = require('../middleware/route.guard');
const router = express.Router();
const Post = require('../models/Post.model');
const axios = require('axios');

router.get("/", async (req, res, next) => {
  try{
    const todaysFacts = await axios.get(`https://uselessfacts.jsph.pl/api/v2/facts/today`);
    const randomFacts = await axios.get(`https://uselessfacts.jsph.pl/api/v2/facts/random`);
    const randomFactsde = await axios.get(`https://uselessfacts.jsph.pl/api/v2/facts/random?language=de`);
    const postArray = await Post.find().populate('author')
    const latestFirst = []; 
    postArray.forEach(element => {
      latestFirst.unshift(element)
    });
    if(req.session.currentUser){
      res.render('index', {postArray: latestFirst, currentUser: req.session.currentUser, fact1: todaysFacts.data, fact2: randomFacts.data, fact3: randomFactsde.data});
    }
    else {res.render("index", {postArray: latestFirst, fact1: todaysFacts.data, fact2: randomFacts.data, fact3: randomFactsde.data});}
  }
  catch(error){
    res.render('auth/signup', {errorMessage: 'invalid username or email'})
    console.log(error);
  }
});

module.exports = router;
