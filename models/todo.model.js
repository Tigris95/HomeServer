const mongoose = require('mongoose')

const Todo = mongoose.Schema({
    _id:{
        type: String,
        require: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },

    text: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('todo', Todo)