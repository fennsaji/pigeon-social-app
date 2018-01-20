const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const publicPath = path.join(__dirname, '../public');

var app = express();

//Sending all files in public
app.use(express.static(publicPath));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./Config/passport')(passport);

const users = require('./Routes/users');

// Port Number
const port = process.env.PORT || 8080;

app.listen(port, ()=> {
    console.log(`Connected to port ${port}`);
});
