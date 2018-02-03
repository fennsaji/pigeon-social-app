const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../Config/database');
const {User} = require('../Models/User');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User ({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  let newChat = new Chat({
    username: req.body.username
  });

  newChat.save().then(chat => {
    console.log(chat);
  }).catch(err => {
    console.log('Unable to save');
  });

  console.log(newUser);
  
  newUser.save().then(user => {
        res.json({success: true, msg: 'User registered'});
    }
  ).catch(err => {
      console.log("Register Error::::", err.name);
      console.log(err);
      console.log(req.body.email,);
      console.log('JSON', err.errmsg);
      
      var errorObj = {
        success: false,
        msg: 'Unknown Error! Please try again',
        code: 0
      };

      if(err.name === 'ValidationError') {
        if(err.errors.email&&err.errors.password) {
         errorObj.msg= 'Invalid Email & Password';
         errorObj.code = 1;
        }
        else if(err.errors.email) {
         errorObj.msg = 'Invalid Email';
         errorObj.code = 2;
          
        }else if(err.errors.password) {
         errorObj.msg = 'Password Minimum length is 6';
         errorObj.code = 3;
        }
      }else if(err.name === 'BulkWriteError') {
        var condEmail = err.errmsg.includes(req.body.email);
        var condUsername = err.errmsg.includes(req.body.username);
        if(condEmail) {
          errorObj.msg = 'Email already exists';
          errorObj.code = 4;
        }
       if(condUsername) {
        errorObj.msg = 'Username already exists';
        errorObj.code = 5;
       }
      }
     res.status(404).json(errorObj);
    }
  );
});

// Authenticate
router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body);

  User.findByCredentials(username, password)
    .then((user) => {
      console.log(user);
      user.generateAuthToken().then(
        (token) => {
          res
            .header('Authorization', token)
            .header('Access-Control-Expose-Headers', 'Authorization')
            .json({success:true, user:user});
        }
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(404)
        .json({success:false, msg: err});
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

router.delete('/logout', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  req.user.removeToken(req.header('Authorization')).then((doc) => {
    res.status(200).json({success:true, doc: doc});
  }, () => {
    res.status(400).json({success:false, msg: 'Failed to logout'});
  });
});

module.exports = router;
