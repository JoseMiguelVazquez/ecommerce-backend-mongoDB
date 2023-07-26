const mongoose = require('mongoose')
const {productSchema} = require('../models/productsModel')

const orderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    date: {
        type: Date
    },
    products: {
        type: [productSchema]
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)