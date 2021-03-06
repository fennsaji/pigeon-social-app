const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./Config/database');
const http = require('http');

const publicPath = path.join(__dirname, '../public');

const users = require('./Routes/users');

// Port Number
const port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB || db.database, 
    (err)=>{
    if (err)
        console.log('MongoDB Down');
    else 
        console.log('Connected to Mongo');
});

var app = express();

//Sending all files in public
app.use(express.static(publicPath));

// Middleware for interprocess communication
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

var server = http.createServer(app);

require('./Chats/chats')(server, app);

require('./Config/passport')(passport);

app.use('/users', users);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

server.listen(port, ()=> {
    console.log(`Connected to port ${port}`);
});