const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Introduce un titulo de producto'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Introduce una descripcion del producto']
    },
    price: {
        type: Number,
        required: [true, 'Introduce un precio al producto'],
        min: [0, 'No puede haber precios negativos']
    },
    category: {
        type: String,
        required: [true, 'Introduce una categoria del producto']
    },
    image: {
        type: String
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)