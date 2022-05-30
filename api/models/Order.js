const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: {
        type: Array,
        required: true
    },
    amount: { type: Number, required: true },
    // address: { type: Object, required: true },
    paymentMethod: { type: String },
    isPaid: { type: Boolean, default: false },
    status: { type: String, default: 'Pending' }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)