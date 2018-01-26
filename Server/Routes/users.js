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

  User.findByCredentials(username, password)
    .then((user) => {
      console.log(user);
      user.generateAuthToken().then(
        (token) => {
          res.header('Authorization', token).send(user);
        }
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send({success:false, msg: 'Failed to login'});
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

router.delete('/logout', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  req.user.removeToken(req.header('Authorization')).then((doc) => {
    res.status(200).send(doc);
  }, () => {
    res.status(400).send('Unabn;e');
  });
});

module.exports = router;
