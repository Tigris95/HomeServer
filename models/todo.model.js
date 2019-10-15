const mongoose = require('mongoose');

const Todo = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: Date.now,
    body: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('todo', Todo)