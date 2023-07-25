const express = require('express')
const router = express.Router()
const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productsControllers')

router.route('/').get(getAllProducts).post(createProduct)
// router.get('/', getAllProducts)
// router.post('/', createProduct)

router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)
// router.get('/:id', getProduct)
// router.put('/:id', updateProduct)
// router.delete('/:id', deleteProduct)


module.exports = router