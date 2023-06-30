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
      res.redirect("/");
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
    const loadComments = await Comment.find({Post: postId}).populate('author');
    if(!req.session.currentUser){
      res.render('post/postPage', { post: post, comment: loadComments });
    }
    else if (req.session.currentUser){
      for(i=0; i < loadComments.length ;i++){
        if(loadComments[i].author.username === req.session.currentUser.username){loadComments[i].owner = true;}
      }
      if(req.session.currentUser.username === post.author.username){
        res.render('post/postPage', { post: post, comment: loadComments, isOwner: true, currentUser: req.session.currentUser });  
      }
      else{res.render('post/postPage', { post: post, comment: loadComments, currentUser: req.session.currentUser });}
    }
  } catch (error) {
    next(error);
  }
});



router.get("/post/:id/edit", async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate('author');
    const loadComments = await Comment.find({Post: postId}).populate('author')
    const confirmUser = await Post.findById(req.params.id).populate('author')
    if (confirmUser.author.id === req.session.currentUser._id)
    {
      res.render('post/postEdit', { post: post, comment: loadComments, currentUser: req.session.currentUser });
    } else {
      res.redirect(`/post/${req.params.id}`);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/post/:id/edit", async (req, res, next) => {
  try {
    const confirmUser = await Post.findById(req.params.id).populate('author')
    if (confirmUser.author.id === req.session.currentUser._id) {
      await Post.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        content: req.body.content,
        theme: req.body.theme,
      });
      res.redirect(`/post/${req.params.id}`);
    } else {
      res.redirect("/");
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
      const post = await Post.findById(req.params.id);
      // console.log(post)
      const commentIncrease = post.commentcount + 1;
      // console.log(commentIncrease)
      await Post.findByIdAndUpdate(req.params.id, {commentcount: commentIncrease});
      res.redirect(`/post/${req.params.id}`)
    }
    else {res.redirect("/");}
  }
  catch (error) {
    next(error);
  }
});

router.post("/comment/:id", async (req, res, next) => {
  try {
    const commentFind = await Comment.findById(req.params.id).populate('author').populate('Post');
    if(req.session.currentUser){
      if(req.session.currentUser.username === commentFind.author.username){
        await Comment.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/post/${commentFind.Post.id}`)
      }
      res.redirect("/");
    }
    else {res.redirect("/");}
  }
  catch (error) {
    next(error);
  }
});

module.exports = router;
