const express = require('express');
const { isLoggedIn } = require('../middleware/route.guard');
const router = express.Router();
const Post = require('../models/Post.model');
const axios = require('axios');

router.get("/", async (req, res, next) => {
  try{

    const response = await axios.get(`https://api.thenewsapi.com/v1/news/top?api_token=pFyFZryDpCem6wnekpOx2nrMsfpAlLQAxbeG0SyK&locale=us&limit=3`);
    const news = response.data.data;
    const postArray = await Post.find().populate('author')
    const latestFirst = []; 
    postArray.forEach(element => {
      latestFirst.unshift(element)
    });
    if(req.session.currentUser){
      res.render('index', {postArray: latestFirst, news: news, currentUser: req.session.currentUser});
    }
    else {res.render("index", {postArray: latestFirst, news: news});}
  }
  catch(error){
    res.render('auth/signup', {errorMessage: 'invalid username or email'})
    console.log(error);
  }
});

module.exports = router;
