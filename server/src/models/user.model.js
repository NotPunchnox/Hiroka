const mongoose = require('mongoose')

module.exports = mongoose.model('user', new mongoose.Schema({
    _id: Number,
    email: {
        type: Object,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: String,
    CreatedAt: {
        default: Date.now(),
        type: Date,
        required: true
    }
}, {
    versionKey: false
}))