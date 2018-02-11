const mongoose = require('mongoose');
const _ = require('lodash');

var ChatSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
    },
    friends : [{
        username: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }],
    chats: [{
        fromUser: {
            type: String,
            required: true
        },
        timeStamp: {
            type: Date,
            required: true
        },
        message: {
            type: String,
            minlengt: 1
        }
    }],
    myChats: [{
        toUser: {
            type: String,
            required: true
        },
        timeStamp: {
            type: Date,
            required: true
        },
        message: {
            type: String,
            minlengt: 1
        }
    }]
});

ChatSchema.methods.addMessage = function(messageObj) {
    var chat = this;
    const newObj = _.pick(messageObj, ['fromUser','timeStamp','message']);
    chat.chats.push(newObj);
    return chat.save().then();
};

ChatSchema.methods.addMyMessage = function(messageObj) {
    var chat = this;
    const newObj = _.pick(messageObj, ['toUser','timeStamp','message']);
    chat.myChats.push(newObj);
    return chat.save().then();
};

ChatSchema.methods.addFriend = function(newFriend) {
    var chat = this;
    chat.friends.push(newFriend);
    return chat.save();
};

ChatSchema.methods.removeFriend = function(username) {
    var chat = this;
    return chat.update({
        $pull: {
            friends: {username}
        }
    });
};

ChatSchema.statics.findUser = function (username) {
    var Chat = this;
    return Chat.findOne({username});
};

var Chat = mongoose.model('Chat', ChatSchema);
module.exports = Chat