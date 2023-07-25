const asyncHandler = require('express-async-handler')
const Product = require('../models/productsModel')


const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find()
    res.status(200).json(products)
})

const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    // const product = await Product.find({ _id: req.params.id })
    res.status(200).json(product)
})

const createProduct = asyncHandler(async (req, res) => {
    const {title, description, price, category, image} = req.body

    if(!title || !description || !price || !category) {
        res.status(400)
        throw new Error('Please complete product information')
    }

    const newProduct = await Product.create({
        title,
        description,
        price,
        category,
        image
    })
    res.status(201).json(newProduct)
})

const updateProduct = asyncHandler(async (req, res) => {
    const productToUpdate = await Product.findById(req.params.id)
    if(!productToUpdate){
        res.status(400)
        throw new Error("Product doesn't exists")
    }
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