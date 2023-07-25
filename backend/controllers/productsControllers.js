const getAllProducts = async (req, res) => {
    res.status(200).json({ message: 'Get All Products'})
}

const getProduct = async (req, res) => {
    res.status(200).json({ message: `Get Product with id: ${req.params.id}`})
}

const createProduct = async (req, res) => {
    res.status(201).json({ message: 'Create Product'})
}

const updateProduct = async (req, res) => {
    res.status(200).json({ message: `Update Product with id: ${req.params.id}`})
}

const deleteProduct = async (req, res) => {
    res.status(200).json({ message: `Delete Product with id: ${req.params.id}`})
}


module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}