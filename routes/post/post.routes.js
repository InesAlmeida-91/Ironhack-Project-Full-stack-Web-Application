const express = require('express');
const { isLoggedIn } = require('../../middleware/route.guard');
const router = express.Router();
const Post = require('../../models/Post.model');


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

router.get("/post/:id", async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate('author');
    if (req.session.currentUser)
    {
      res.render('post/postPage', { post: post, loggedIn: true, currentUser: req.session.currentUser });
    } else {
      res.render('post/postPage', { post: post });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
