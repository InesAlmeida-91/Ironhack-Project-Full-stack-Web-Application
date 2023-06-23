const bcrypt = require('bcrypt');
const saltRounds = 10;

const express = require('express');
const router = express.Router();

const User = require('../../models/User.model');
const { isLoggedIn, isLoggedOut } = require('../../middleware/route.guard');
 
router.get("/signup", isLoggedOut, (req, res, next) => {
  
  res.render('auth/signup');
     
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
      res.render('auth/signup', {errorMessage: 'invalid username or email'})
      console.log(error);
    }
});


router.get('/login', isLoggedIn, (req, res) =>{
  
      res.render('auth/login');
  
})

  
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === '' || password === '') {
      res.render('auth/login', {
        errorMessage: 'Please enter email and password to login.'
      });
    }
    const user = await User.findOne({ email });
    console.log('user', user);
    if (!user) {
      res.render('auth/login', {
        errorMessage: 'Email is not registered. Try with another email.'
      });
    } else if (bcrypt.compareSync(password, user.passwordHash)) {
      const { username, email } = user;
      req.session.currentUser = { username };
      user.loggedIn = true; 
      await user.save();
      res.redirect('/');
    } else {
      res.render('auth/login', { errorMessage: 'Incorrect password.' });
    }
  } catch (error) {
    console.log(error);
    }
});
      

router.post('/logout', async (req,res) =>{
  try {
    //  const { currentUser } = req.session;
      // if (currentUser) {
      //   await User.findOneAndUpdate(
      //     { username: currentUser.username },
      //     );
      //   }
      req.session.destroy();
        res.redirect('/');
      } catch (error) {
        console.log(error);
      }
});

module.exports = router;