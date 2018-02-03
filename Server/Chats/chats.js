const socketIO = require('socket.io');
module.exports = function (server) { 
    console.log("Working Chat");
    var io = socketIO(server);
    var i = 0;
    var UsersObj = {};

    io.on('connection', (socket) => {
        i++;
        console.log('New user connected' + i, socket.handshake.query);

        var username = socket.handshake.query.username;
        UsersObj[username]=socket.id;
        console.log(UsersObj);

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    
        socket.on('add-message', (messageObj) => {
            console.log('Adding message');
            console.log(messageObj);
            io.to(UsersObj[messageObj.toUser]).emit('message', messageObj);
            // Function above that stores the message in the database
            // databaseStore(message)
        });

        socket.on('fennsaji2', (params, callback) => {

        });
    });

}