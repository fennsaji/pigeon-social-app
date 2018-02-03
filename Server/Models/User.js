const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const db = require('../Config/database');


var UserSchema = new mongoose.Schema({
    name: {
      type: String,
      minlength: 1,
      required: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email'
      }
    },
    password: {
      type: String,
      require: true,
      minlength: 6
    },
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      unique: true,
    },
    tokens: [{
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }]
  });

  UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();
  
    return _.pick(userObject, ['_id', 'email', 'username']);
  };
  

  UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, db.secret).toString();
    token = 'JWT ' + token;
  
    user.tokens.push({access, token});
  
    return user.save().then(() => {
      return token;
    });
  };
  

  UserSchema.methods.removeToken = function (token) {
    var user = this;
    // delete user.tokens;
    console.log(token);
   
    return user.update({
      $pull: {
        tokens : {access:'auth',token}
      }
    });
  };


  UserSchema.statics.getUserById = function(id, callback) {
    User.findById(id, callback);
  };

  
  UserSchema.statics.findByCredentials = function (username, password) {
    var User = this;
  
    return User.findOne({username}).then((user) => {
      if (!user) {
        return Promise.reject('Not Found User');
      }
  
      return new Promise((resolve, reject) => {
        // Use bcrypt.compare to compare password and user.password
        bcrypt.compare(password, user.password, (err, res) => {
          if (res) {
            resolve(user);
          } else {
            reject('Wrong Password');
          }
        });
      });
    });
  };
  

  // Hashing Password before Saving
  UserSchema.pre('save', function (next) {
    var user = this;
  
    if (user.isModified('password')) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          user.password = hash;
          next();
        });
      });
    } else {
      next();
    }
  });
  
  
  var User = mongoose.model('User', UserSchema);
  
  module.exports = {User}
  