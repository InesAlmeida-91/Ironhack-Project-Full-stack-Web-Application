const bcrypt = require('bcrypt');
const saltRounds = 10;

const express = require('express');
const router = express.Router();

const User = require('../../models/User.model');
const { isLoggedIn, isLoggedOut } = require('../../middleware/route.guard');
 
router.get("/signup", isLoggedOut, (req, res, next) => {
  if(req.session.currentUser){
    res.render('auth/signup', { loggedIn: true });
    } else{
      res.render('auth/signup');
      }   
});


router.post("/signup", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userFromDB = await User.create({username, email, passwordHash: hashedPassword});
    req.session.currentUser = {username, email};
    res.redirect('/profile');
  } catch(error){
      console.log(error);
    }
});


router.get('/login', (req, res) =>{
  if(req.session.currentUser){
    res.render('auth/login', { loggedIn: true });
  } else{
      res.render('auth/login');
    }
})

  
  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email === '' || password === '') {
        res.render('auth/login', {
          errorMessage: 'Please enter email and password to login.'
        });
        return;
      }
      const user = await User.findOne({ email });
      console.log('user', user);
      if (!user) {
        res.render('auth/login', {
          errorMessage: 'Email is not registered. Try with another email.'
        });
        return;
      } else if (bcrypt.compareSync(password, user.passwordHash)) {
        const { username, email } = user;
        req.session.currentUser = { username };
        user.loggedIn = true; 
        await user.save();
        res.render('index', { currentUser: req.session.currentUser });
      } else {
        res.render('auth/login', { errorMessage: 'Incorrect password.' });
      }
    } catch (error) {
      console.log(error);
      }
  });
      

router.post('/logout', isLoggedIn, async (req,res) =>{
  try {
     const { currentUser } = req.session;
      if (currentUser) {
        await User.findOneAndUpdate(
          { username: currentUser.username },
          { loggedIn: false }
          );
        }
      req.session.destroy();
        res.redirect('/');
      } catch (error) {
        console.log(error);
      }
});

module.exports = router;