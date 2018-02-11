const socketIO = require('socket.io');
const Chat = require('../Models/Chats');

module.exports = function (server, app) { 
    console.log("Working Chat");
    var io = socketIO(server);
    var i = 0;
    var UsersObj = {};

    function databaseStore(toUser, mssgObj) {
        Chat.findUser(toUser).then(chatObj => {
            chatObj.addMessage(mssgObj).then(data => {
                console.log('Saved', data);
            }).catch(err => {
                console.log('Not Saved', err);
            }); 
        }).catch(err => {
            console.log('User not Found',err);
        });
    }

    function myDatabaseStore(fromUser, mssgObj) {
        Chat.findUser(fromUser).then(chatObj => {
            chatObj.addMyMessage(mssgObj).then(data => {
                console.log('Saved', data);
            }).catch(err => {
                console.log('Not Saved', err);
            }); 
        }).catch(err => {
            console.log('User not Found',err);
        });
    }

    function retrieveMessage(username) {
        return Chat.findUser(username).then(chat => {
            console.log('Retrieving Message',chat)
            if(chat) {
                return chat;
            } 
            return;      
        });
    }

    app.post('/addFriend', (req, res) => {
        username = req.body.username.username;
        newFriend = {
            username: req.body.newfriend,
            name: req.body.name
        };
        console.log(req.body);

        Chat.findUser(username).then(chatObj => {
            console.log('Found user to add ', chatObj);
            chatObj.addFriend(newFriend).then(chat => {
                console.log('Added user', chat);
                res.json({success:true, friends:chat.friends});
            }).catch(err => {
                console.log('Error adding friend', err);
                res.json({success:false, mssg:'Error adding friend'});
            });

        }).catch(err => {
            console.log('Error finding you', err);
            res.json({success:false, mssg:'Error finding you'});
        });
    });

    app.delete('/removeFriend', (req, res) => {
        username = req.body.username;
        oldfriend = {
            username: req.body.newfriend,
            name: req.body.name
        };

        Chat.findUser(username).then(chatObj => {
            chatObj.removeFriend(oldfriend).then(chat => {
                console.log('Removed user', chat);
                res.json({success:true, friends:chat.friends});
            }).catch(err => {
                console.log('Couldnot remove user', err);
                res.json({success:false, mssg:'Couldnot remove user'});
            });
        }).catch(err => {
            console.log('Could not find you', err);
            res.json({success:false, mssg:'Could not find you'});
        });
    });

    io.on('connection', (socket) => {
        i++;
        console.log('New user connected' + i, socket.handshake.query);

        var username = socket.handshake.query.username;
        UsersObj[username]=socket.id;
        console.log(UsersObj);

        retrieveMessage(username).then(chat => {
            console.log('Emitting Message',chat)
            socket.emit('old-messages', {chat});
        }).catch(err => {
            console.log('Retrieving Message Error',err)
        });

        socket.on('disconnect', () => {
            UsersObj[username]='';
            console.log('user disconnected');
        });
    
        socket.on('add-message', (messageObj) => {
            console.log('Adding message');
            console.log(messageObj);
            io.to(UsersObj[messageObj.toUser]).emit('message', messageObj);
            databaseStore(messageObj.toUser, messageObj);
            myDatabaseStore(messageObj.fromUser, messageObj);
        });
    });
}