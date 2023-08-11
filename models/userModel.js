const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    isDoctor: {
        type: 'boolean',
        default: false,
    },
    isAdmin: {
        type: 'boolean',
        default: false,
    },
    seenNotifications: {
        type: 'Array',
        default: [],
    },
    unseenNotifications: {
        type: 'Array',
        default: [],
    },

}, {
    timestamps: true,
})
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;