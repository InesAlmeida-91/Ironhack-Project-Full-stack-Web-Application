const express = require('express');
const { isLoggedIn } = require('../../middleware/route.guard');
const router = express.Router();
const Post = require('../../models/Post.model');
const Comment = require('../../models/Comment.model');
const User = require('../../models/User.model');
const fileUploader = require('../../config/cloudinary.config');


router.post("/post", fileUploader.single('post-image'), async (req, res, next) => {
  try {
    if (req.session.currentUser) {
      let imageUrl = '';
      if (req.file) {
        imageUrl = req.file.path;
      }
      await Post.create({
        author: req.session.currentUser._id,
        title: req.body.title,
        imageUrl: imageUrl,
        content: req.body.content,
        theme: req.body.theme,
        commentcount: 0,
      });
      res.redirect('/');
    } else {
      res.redirect("/");
    }
  } catch (error) {
    next(error);
  }
});

router.get("/post/:id", async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate('author');
    const loadComments = await Comment.find({Post: postId}).populate('author')
    if (req.session.currentUser)
    {
      res.render('post/postPage', { post: post, comment: loadComments, loggedIn: true, currentUser: req.session.currentUser });
    } else {
      res.render('post/postPage', { post: post, comment: loadComments });
    }
  } catch (error) {
    next(error);
  }
});

router.post("/post/:id/comment", async (req, res, next) => {
  try {
    const userinQuestion = await User.findOne({username: req.session.currentUser.username});
    if(req.session.currentUser){
      await Comment.create({
        author: userinQuestion._id,
        Post: req.params.id,
        content: req.body.content,
      })
      const currentPost = await Post.findById(req.params.id);
      commentIncrease = currentPost.commentcount++;
      const updatePost = await Post.findByIdAndUpdate(req.params.id, commentIncrease);
      res.redirect(`/post/${req.params.id}`)
    }
    else {res.redirect("/");}
  }
  catch (error) {
    next(error);
  }
});

module.exports = router;
