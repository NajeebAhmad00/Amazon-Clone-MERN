const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    info: { type: Object },
    category: { type: Array },
    img: { type: Array, required: true },
    productListImg: { type: String, required: true },
    cartImg: { type: String, required: true },
    desc: { type: Array, required: true }
})

module.exports = mongoose.model('Product', productSchema)