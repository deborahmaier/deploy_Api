const mongoose = require('mongoose');
const { Schema } = require('mongoose');

//db.createCollections('users')
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('users', userSchema);
