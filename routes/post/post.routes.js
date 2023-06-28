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
    if (req.session.currentUser) {
      const postId = req.params.id;
      const post = await Post.findById(postId).populate('author');

      res.render('post/postPage', { post });
    } else {
      res.redirect("/");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
