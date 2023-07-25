const mongoose = require('mongoose')

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
        type: [Product]
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)