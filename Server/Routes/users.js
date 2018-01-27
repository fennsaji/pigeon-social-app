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

  console.log(newUser);
  newUser.save().then(user => {
        res.json({success: true, msg: 'User registered'});
    }
  ).catch(err => {
      console.log(err.name);
      res.json({success: false, msg: 'Failed to register user'});
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
        .json({success:false, msg: 'Failed to login'});
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
