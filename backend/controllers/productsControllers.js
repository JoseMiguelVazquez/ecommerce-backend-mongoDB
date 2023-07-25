const asyncHandler = require('express-async-handler')


const getAllProducts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get All Products'})
})

const getProduct = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get Product with id: ${req.params.id}`})
})

const createProduct = asyncHandler(async (req, res) => {
    if(!req.body.title || !req.body.description || !req.body.price || !req.body.category) {
        res.status(400)
        throw new Error('Por favor completa la informacion del producto')
    }
    res.status(201).json({ message: 'Create Product'})
})

const updateProduct = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Product with id: ${req.params.id}`})
})

const deleteProduct = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Product with id: ${req.params.id}`})
})


module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}