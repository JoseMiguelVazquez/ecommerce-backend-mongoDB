const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User must have a name']
    },
    email: {
        type: String,
        required: [true, 'User must use a unique email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'User must have a password']
    },
    role: {
        type: String,
        default: 'CUSTOMER' // CUSTOMER OR ADMIN
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)