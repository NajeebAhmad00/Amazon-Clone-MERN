const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    address: [
        {
            street: { type: String },
            country: { type: String },
            city: { type: String },
            state: { type: String },
            zipCode: { type: Number }
        }
    ],
    phone: {
        type: Number
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)