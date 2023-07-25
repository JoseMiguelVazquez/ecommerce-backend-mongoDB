const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Product must have a unique title'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Product must have a description']
    },
    price: {
        type: Number,
        required: [true, 'Product must have a price'],
        min: [0, "There can't be negative prices"]
    },
    category: {
        type: String,
        required: [true, 'Product must have a category']
    },
    image: {
        type: String
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)
module.exports = productSchema