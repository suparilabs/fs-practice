// user.model.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    FirstName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    LastName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    ContactNumber: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const contacts = mongoose.model('contacts', userSchema);

module.exports = contacts;