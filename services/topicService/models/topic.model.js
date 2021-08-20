const mongoose = require('mongoose')

module.exports = mongoose.model('user', new mongoose.Schema({
    _id: Number,
    topic: {
        name: String,
        description: String,
        messages: [{
            user: {
                _id: Number,
                avatar: String,
                username: String,
                tag: String
            },
            content: String,
            CreatedAt: {
                default: Date.now(),
                type: Date,
                required: true
            }
        }]
    },
    owner: {
        _id: Number,
        avatar: String,
        username: String,
        tag: String
    },
    CreatedAt: {
        default: Date.now(),
        type: Date,
        required: true
    }
}, {
    versionKey: false
}))